<template>
  	<div class="tag-div">
		<el-tag v-for="tag in tagList" :key="tag.name" :type="tag.type">
			{{tag.name}}
		</el-tag>
  	</div>
</template>
<script>
export default {
    props:['tagList']
}
</script>

<style>
.tag-div>.el-tag{display: block; width:80%;cursor: pointer;margin: 10px 0 10px 10px; text-align: center;}
</style>