<template>
    <div class="artical-div">
    	<el-col :span="19">
        <ul class="artical-list">
            <li class="artical-item" v-for="( artical, index) in articalList" :key="index">
                <div class="artical-top"><span>{{artical.time}}</span></div>
                <h1 class="artical-title">{{artical.title}}</h1>
                <div class="artical-content">
                    <p>{{artical.content}}</p>  
                </div>
                <div class="artical-footer">
                    <span>阅读</span>
                    <span>| 喜欢</span>
                    <span>| 评论</span>                    
                </div>
            </li>
        </ul>  					
    	</el-col>
    </div>
</template>

<script>
export default {
    props: ['articalList']
}
</script>

<style>
.artical-div{margin-top: 20px; color:#B0B9C5;}
.artical-item{ padding-bottom:10px; border-bottom: 1px solid #B0B9C5}
.artical-footer,.artical-top{font-size: 0.8em; margin-bottom: 10px;}
.artical-title{color: #000;font-size: 1.2em;margin-bottom: 10px;}
.artical-content{color:#000;font-size: 1em;margin-bottom: 10px;}
</style>