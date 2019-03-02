<template>
  <div class="goods-info">
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
             <swiper :lunbotuList="lunbotu"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="price">
               市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
            </p>
            <p>购买数量：</p>
            <p>
                <mt-button type="primary" size="small">立即购买</mt-button>
                 <mt-button type="danger" size="small">加入购物车</mt-button>
            </p>
        </div>
      </div>
      <!-- <div class="mui-card-footer">页脚</div> -->
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbotu:[]
        }
    },
    created () {
       this.getLunbotu()
    },
    methods: {
        getLunbotu(){
            this.$http.get('api/getthumimages/'+this.id).then(res=>{
                // console.log(res);
                if(res.body.status===0){
                    // 先循环轮播图数组中的每一项，为item添加img属性，因为轮播图组件中，只认识item.img不认识item.src
                    res.body.message.forEach(item => {
                        item.img=item.src;
                    });
                    this.lunbotu=res.body.message;
                }
            })
        }
    },
    components:{
        swiper
    }
};
</script>

<style lang="scss" scoped>
    .goods-info{
        background-color: #eee;
        overflow: hidden;
    }
</style>

