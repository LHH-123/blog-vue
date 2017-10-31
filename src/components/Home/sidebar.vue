<template>
  	<div class="sidebar-div">
	  	<el-col :lg="3" :xs="2" :sm="2" :md="2"> 
	    	<el-menu default-active="2">
	      		<el-submenu index="1">
	        		<template slot="title"><i class="el-icon-menu"></i>技术</template>
					<tag :tag-list="ctagList"></tag>	
	      		</el-submenu>
	      		<el-menu-item index="2"><i class="el-icon-edit"></i>日志</el-menu-item>
	      		<el-menu-item index="3"><i class="el-icon-date"></i>足迹</el-menu-item>
	      		<el-menu-item index="4"><i class="el-icon-message"></i>留言</el-menu-item>
	    	</el-menu>
	  	</el-col>
  	</div>
</template>

<script>
import tag from './tag.vue'
export default {
  props:['ctagList'],
  components:{ tag }
}
</script>

<style>
.sidebar-div .el-tag{}

</style>