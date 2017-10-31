<template>
	<div class="carousel-div">
	  	<el-carousel :interval="3000" type="card" height="300px">
		    <el-carousel-item v-for="(image, index) in images" :key="index">
		      <img  :src="image.imgUrl" alt="">
		    </el-carousel-item>
	  	</el-carousel>
  	</div>
</template>

<script type="text/javascript">
import image1 from '../../assets/img/1.jpg'
import image2 from '../../assets/img/2.jpg'
import image3 from '../../assets/img/3.jpg'
import image4 from '../../assets/img/4.jpg'
import image5 from '../../assets/img/5.jpg'
import image6 from '../../assets/img/6.jpg'
export default {
  data () {
    return {
        images:[
            {imgUrl: image1},
            {imgUrl: image2},
            {imgUrl: image3},
            {imgUrl: image4},
            {imgUrl: image5},
            {imgUrl: image6}]
    }
  }
}
</script>

<style>
.carousel-div{width: 80%; margin: 0 auto; height: }
img{ width: 100%; height: 100%;}
</style>