<template>
    <div class="login-div">
        <div class="login-content">
            <h1>登录</h1>
            <el-form :model="loginFrom" :rules="loginRule" ref="loginFrom"  class="login-form">
                <el-form-item prop="user">
                    <el-input type="user" v-model="loginFrom.user" auto-complete="off" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginFrom.password" auto-complete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item class="login-submit-btn">
                    <el-button @click="submitForm('loginFrom')" type="success">登录</el-button>
                </el-form-item>
            </el-form>         
            <div class="login-footer">            
                <router-link :to="{ path: '/register'}" class="login-register">
                    没有账号？马上注册
                </router-link>
                <router-link :to="{ path: '/home'}" class="login-cancel">
                    回首页
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        loginFrom: {
          user: '',
          password: '',
          apiUrl: '/gm/api/users'
        },
        loginRule: {
          user: [
            { required:true, message:'请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required:true, message:'请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        submitForm: function(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {

                    var user = this.loginFrom.user,
                        password = this.loginFrom.password;
                    this.$http.get('http://localhost:9090/users?name=' + user +'&password='+ password
                    ).then(res=>{                    
                        if(res.body != null & res.body.length > 0){ 
                        alert("登录成功"); 
                        }else{
                        alert("请输入正确的用户名和密码！！！");
                        }
                    }).catch(e => {
                        console.log(e);
                    });
                } else {
                    this.$refs[formName].resetFields();
                    return false;
                }
            });
        }/*,
        inputBlur: function(errorItem, inputContent){
            if(errorItem === 'user') {
                if(inputContent === '') {
                    this.loginFrom.userError = '用户名不能为空'
                } else {
                    this.loginFrom.userError = '';
                }
            } else if (errorItem === 'password') {
                if(inputContent === '') {
                    this.loginFrom.passwordError = '密码不能为空';
                } else {
                    this.loginFrom.passwordError = '';
                }
            }
            if (this.loginFrom.user != '' && this.loginFrom.password != '') {
                this.loginFrom.beDisabled = false;
            } else {
                this.loginFrom.beDisabled = true;
            }

        }*/
    }
}
</script>

<style>
.login-div{width:100%; height:100%; position: fixed; top:0; left:0; z-index:999; background-image: url(../../assets/img/back.jpg); background-size: cover;}
.login-content>h1{color:#fff; text-align: center; margin-bottom: 20px; position: relative;}
.login-content{width: 30%;margin: 0 auto; margin-top: 60px; padding: 30px;}
.login-form{margin: 0 auto;}
.login-form button{display:block; width: 100%;}
.login-form input, .login-reset-btn .el-button{background-color: rgba(225,225,225,0.5); border:1px solid #fff;}
.login-form input::placeholder, .login-form .el-button{color: #fff; text-align: center;}
.login-footer a{color: #fff; cursor: pointer; margin-right: 20px;}
.login-register{float: left;}
.login-cancel{float: right;}
</style>
