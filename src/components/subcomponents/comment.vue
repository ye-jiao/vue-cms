<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
            <div class="cmt-list">
                <div class="cmt-item" v-for="(item, i) in comments" :key="i">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content==='undefined' ? '此用户没有评价':item.content}}
                </div>
                </div>
            </div>
         <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return {
            pageindex:1,
            comments:[],
            msg:''
        }
    },
    created () {
        this.getComments()
    },
    methods: {
        getComments(){
            this.$http.get('api/getcomments/'+this.id+"?pageindex="+this.pageindex).then(result=>{
                if(result.body.status===0){
                    // this.comments=result.body.message
                    // 老数据拼接新数据，调用数组的concat方法
                    this.comments=this.comments.concat(result.body.message)
                }else{
                    Toast("获取资源失败")
                }
            })
    },
    getmore(){
        this.pageindex++;
        this.getComments();
    },
    postComment(){
        if(this.msg.trim().length===0){
           return Toast("评论内容不能为空！");
        }
        this.$http.post('api/postcomment/'+this.$route.params.id,{content:this.msg.trim()}).then(function(res){
            if(res.body.status===0){
                // 拼接出一个评论对象
                var cmt ={user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()}
            }
            this.comments.unshift(cmt);
            this.msg='';
        })
    }

},
  props: ["id"]
}
</script>

<style lang="scss" scoped>
 .cmt-container{
     h3{
         font-size:18px;
     }
     textarea{
         font-size: 14px;
         height: 85px;
         margin: 0;
     }
     .cmt-list{
         margin: 5px 0;
         .cmt-item{
             font-size: 13px;
         }
         .cmt-title{
             font-size: 12px;
             line-height: 30px;
             background-color: #ccc;
         }
         .cmt-body {
             line-height:35px;
             text-indent: 2em;
         }
     }
 }
</style>
