<template>
    <div class="news-info">
       <h3>{{ newsInfoList.title }}</h3>
       <div class="date-click">
           <span>发表时间：{{newsInfoList.add_time | dateFormat}}</span>
           <span>点击{{newsInfoList.click}}次</span>
       </div>
       <hr>
       <div class="content" v-html="newsInfoList.content"> 
            
       </div>
       <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfoList:{}
        }
    },
    created () {
        this.getnewsInfo()
    },
    methods: {
        getnewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(res=>{
                // console.log(res.body)
                if(res.body.status===0){
                    this.newsInfoList=res.body.message[0]
                }else{
                    Toast('获取数据列表失败')
                    
                }
            })
        }
    },
    components: {
        'comment-box':comment
    }
}
</script>

<style lang="scss" scoped>
    .news-info{
        padding:0 5px;
        h3{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color:red;
        }
        .date-click{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;

        }
    }
</style>

