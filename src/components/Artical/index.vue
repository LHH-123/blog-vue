<template>
  <div class="subArtical">
  	<div class="subTitle">
		<p>文章标题</p>
    	<el-input placeholder="文章标题" v-model="input5" class="subTitle-input">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="原创" value="1"></el-option>
              <el-option label="转载" value="2"></el-option>
            </el-select>
        </el-input>	
  	</div>
  	<div class="subContent">
  		<p>文章内容</p>
	    <quill-editor v-model="content"
	    			class="editor"
	                ref="myQuillEditor"
	                :options="editorOption">
	  	</quill-editor>  		
  	</div>
  	<div class="subFooter">
        <div class="subFooter-tag">            
      		<span>标签</span>
      		<el-tag v-for="tag in tags.tagList" :key="tag.name" :type="tag.type" class="subFooter-tag-item">
    			{{tag.name}}
    		</el-tag>
        </div>
        <div class="subFooter-btn">
            <el-button type="success">发表文章</el-button>
            <el-button type="info">保存文章</el-button>           
        </div>
  	</div>
  </div>
</template>

<script>
export default {
  	data () {
      return {
        input3: '',
        input4: '',
        input5: '',
        select: '',
        content: '<p style="color:#fff;">文章内容...</p>',
        editorOption: {
          // some quill options
        },
        tags:{
            tagList: [],
            apiUrl: '/gm/api/tagList'
        }
      }
    },
    created : function() {
        this.getTagList();
    },
    methods: {
        getTagList: function () {
            this.$http.get(this.tags.apiUrl).then(res=>{
                this.tags.tagList = res.body;
                console.log(this.tags.tagList)
            })
        }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    }
}
</script>

<style>
.subArtical{ width: 80%; margin: 0 auto; background-color:#F7F7F7; height: 1000px; padding: 20px;}
.subContent>p, .subTitle>p, .subFooter-tag>:first-child{margin-bottom: 10px; color: #444; font-weight: bold;}
.subTitle input{width: 100%; height:30px; background-color: transparent; border: 1px solid #ccc;}
.subTitle-input>:first-child{background-color: transparent;}
.subTitle input::placeholder{font-size: 1em; text-indent: 1em;}
.subTitle, .subFooter{margin-bottom: 20px;}
.subFooter-tag-item{margin-right: 10px;}
.subContent{margin-bottom: 60px;}
.editor{height: 600px;}
.subFooter-btn{float: right; margin-top: 60px;}
</style>