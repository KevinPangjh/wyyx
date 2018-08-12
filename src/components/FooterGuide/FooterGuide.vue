<template>
  <footer class="footer">
    <span href="javascript:;" class="guide_item" @click="goto('./home')" :class="{on: $route.path === '/home'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goto('./knowledge')" :class="{on: $route.path === '/knowledge'}">
      <span class="item_icon">
        <i class="iconfont icon-wxbmingxingdianpu"></i>
      </span>
      <span>识物</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goto('./classification')" :class="{on: $route.path === '/classification'}">
    <span class="item_icon">
      <i class="iconfont icon-wxbpinpaibao"></i>
    </span>
      <span>分类</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goto('./shopcart')" :class="{on: $route.path === '/shopcart'}">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goto('./profile')" :class="{on: $route.path === '/profile'}">
    <span class="item_icon">
      <i class="iconfont icon-account"></i>
    </span>
      <span>个人</span>
    </span>
  </footer>

</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style>
  .footer{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1.0rem;
    border-top: #ededed 1px solid;
    align-items: center;
    background-color: #fff;
  }
  .guide_item{
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 0.43rem;
    color: #999999;
    white-space: nowrap;
    font-size: 0.3rem;
  }
  .on{
    color: red;
  }
  .iconfont{
    font-size: 0.46rem;
  }

</style>

