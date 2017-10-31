<template>
    <div class="register-div">
        <div class="register-content">
            <h1>注册</h1>
            <el-form :model="registerForm" :rules="registerRules" ref="registerForm"  class="register-form">
                <el-form-item prop="user">
                    <el-input type="text" v-model="registerForm.user" auto-complete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="text" v-model="registerForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button  @click="submitForm('registerForm')" type="info">提交</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button  @click="resetForm('registerForm')" type="danger">重置</el-button>
                </el-form-item>
            </el-form>         
            <div class="register-footer">            
                <router-link :to="{ path: '/login'}" class="register-login">
                    已有账号，马上登录
                </router-link>
                <router-link :to="{ path: '/home'}" class="register-cancel">
                    回首页
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.registerForm.password !== '') {
            this.$refs.registerForm.validateField('password');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        registerForm: {
          user: '',
          password: ''
        },
        apiUrl: 'http://localhost:9090/users',
        registerRules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm: function(formName, event) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data = {
                "name": this.registerForm.user,
                "password": this.registerForm.password
            };
            this.$http.post(this.apiUrl, JSON.stringify(data), { 
                headers: { 
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json' 
                }
            }).then(res=>{
                    console.log(res);
            }).catch(e => {
                    console.log(e);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm: function(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
.register-div{width:100%; height:100%; position: fixed; top:0; left:0; z-index:999; background-image: url(../../assets/img/back.jpg); background-size: cover;}
.register-content>h1{color:#fff; text-align: center; margin-bottom: 20px; position: relative;}
.register-content{width: 30%;margin: 0 auto; margin-top: 60px; padding: 30px;}
.register-form{margin: 0 auto;}
.register-form button{display:block; width: 100%;}
.register-form input{background-color: rgba(225,225,225,0.5); border:1px solid #fff;}
.register-form input::placeholder, .register-form .el-button{color: #fff; text-align: center;}
.register-footer a{color: #fff; cursor: pointer; margin-right: 20px;}
.register-login{float: left;}
.register-cancel{float: right;}
</style>
