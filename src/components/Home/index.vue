<template>
    <div class="home-div">
    	<el-row class="home-content" :gutter="20">
	    	<sidebar :ctag-list="tags.tagList"></sidebar>
	  		<artical :articalList="articals.articalList"></artical>    		
    	</el-row>
    </div>
</template>

<script>
import artical from './artical.vue'
import sidebar from './sidebar.vue'
import tag from './tag.vue'

export default {
    components: { artical, sidebar, tag },
    data() {
        return {
            articals:{
                articalList: [],
                apiUrl: '/gm/api/articalList'
            },
            tags:{
                tagList: [],
                apiUrl: '/gm/api/tagList'
            }
        }
    },
    created : function() {
        this.getArticalList();
        this.getTagList();
    },
    methods: {
        getArticalList: function () {
            this.$http.get(this.articals.apiUrl).then(res=>{
                this.articals.articalList = res.body;
            })
        },
        getTagList: function () {
            this.$http.get(this.tags.apiUrl).then(res=>{
                this.tags.tagList = res.body;
                console.log(this.tags.tagList)
            })
        }

    }
}
</script>
<style>
.home-div{ width: 80%; margin: 0 auto; background-color:#F7F7F7; height: 1000px;}
</style>