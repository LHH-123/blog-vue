<template>
  <div id="app">
    <NavBar></NavBar>
    <Carousel></Carousel>
    <transition name="fade">
    	<router-view></router-view>
    </transition>
    <FooterView></FooterView>
  </div>
</template>

<script>
import NavBar from './components/Nav/index.vue'
import Carousel from './components/Carousel/index.vue'
import FooterView from './components/Footer/index.vue'

export default {
  name: 'app',
  components: { NavBar, Carousel, FooterView }
}
</script>

<style>
#app{height:100%;}
.register-content, .login-content{transition: all .8s;}
.fade-enter-active {transition: all .5s}
.fade-enter, .fade-leave-active {opacity: 0; transform: translateX( 300px );}
</style>
