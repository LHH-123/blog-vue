<template>
  <div class="nav-div">
    <el-row :gutter="10">
      <el-menu :default-active="activeIndex" class="nav-el-menu" mode="horizontal">
        <el-col :span="2">
          <div class="grid-content">
            <el-menu-item index="1" class="nav-home nav-el-menu-item">
              <router-link :to="{ path: '/home' }"  title="首页">
                LHH
              </router-link>      
            </el-menu-item> 
          </div>                   
        </el-col>
        <el-col :span="1"  :offset="17">
          <div class="grid-content">
            <el-menu-item index="2" class="nav-login nav-el-menu-item">
              <router-link :to="{ path: '/login'}" title="注册">
                登录
              </router-link>
            </el-menu-item>
          </div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">
            <el-menu-item index="3" class="nav-register nav-el-menu-item">
              <router-link :to="{ path: '/register'}" title="登录">
                注册
              </router-link>
            </el-menu-item>
          </div>            
        </el-col>
        <el-col :span="2">
          <div class="grid-content">          
            <el-menu-item index="4" class="nav-artical nav-el-menu-item">
              <router-link :to="{ path: '/artical'}" title="写文章">
                写文章
              </router-link>
            </el-menu-item>
          </div>
        </el-col>
      </el-menu>  
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li{padding: 0;}
.grid-content{float: left; position: relative;left: 50%;}
.nav-el-menu{background-color: transparent;border-bottom: 1px solid #F7F7F7; }
.nav-el-menu-item{position: relative; left: -50%; height:30px; line-height:30px; color: #A9A9A9; margin: 10px 0; vertical-align: baseline;}
.nav-home{ color:#EC6149; font-size: 1.25em; }
.nav-artical{color:#EC6149; font-size: 1.25em;}


</style>
