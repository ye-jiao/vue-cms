<template>
  <div class="goods-list">
     <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div"> -->
    <!-- 在网页中有两种跳转方式 -->
    <!-- 方式一 ：使用a 标签的形式跳转 叫标签跳转 -->
    <!-- 方式二：使用window.location.href的形式，叫做 编程式导航 -->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
     <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
  </div>
 
</template>
<script>
export default {
  data() {
    // data往自己的组件内部，挂载一些私有数据
    return {
      pageindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      // 获取商品列表
      this.$http.get("api/getgoods?pageindex="+this.pageindex).then(res => {
        //   console.log(res.body);
        if (res.body.status === 0) {
        //   this.goodslist = res.body.message;
        this.goodslist=this.goodslist.concat(res.body.message)
        } else {
          Toast("加载失败");
        }
      });
    },
    getmore(){
        this.pageindex++;
        this.getgoodslist();
    },
    goDetail(id){
        // 使用js的形式进行路由导航
        // 注意：一定要区分this.$route和$this.$router两个对象
        // 其中：this.$route是路由参数对象，所有路由中的参数，params,query都属于它
        // 其中：this.$routerhi一个路由导航对象，用它可以方便的使用js代码，实现路由
        // 前进、后退、跳转到新的URl地址
        // this.router.push('/home/goodsinfo/'+id);//字符串
        // this.router.push({path:'/home/goodsinfo/'+id});//对象
        // 3.传统命名的路由
        this.$router.push({name:"goodsinfo",params:{id}})

    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;//flex-wrap规定flex容器是单行或者多行，规定灵活的项目在必要的时候拆行或拆列
  padding: 7px;
  //justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式
  justify-content: space-between;//项目位于各行之间留有空白的容器内
  .goods-item {
    width: 49%;
    margin: 3px 0;
    padding: 2px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
 
}

</style>

