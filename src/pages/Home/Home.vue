<template>
  <div class="m-indexHd">
    <header>
      <div class="line">
        <span id="logo" href="javascript:;">网易严选</span>
        <div class="m-topSearchIpt ipt">搜索商品，共1000件</div>
      </div>
      <!--商品导航-->
      <div class="scroll">
        <ul class="list" ref="ulWidth">
          <li class="list_item" v-for="(item,index) in data.nav" :key="index">{{item}}</li>
        </ul>
      </div>
    </header>
    <div class="homeContainer">
      <div class="Container">
        <!--轮播图部分-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in data.banner" :key="index">
              <img :src="item" alt=""/>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="m-indexServicePolicy">
          <ul class="g-grow">
            <li class="item" v-for="(item,index) in data.active" :key="index"><i></i>{{item}}</li>
          </ul>
        </div>
        <!--详情页1-->
        <div class="m-indexFloor">
          <div class="hd" v-if="home.brand">{{home.brand.title}}<i></i></div>
          <div class="m-indexManufacturersSupplying">

            <ul class="list1" v-if="home.brand">
              <li class="item1"  v-for="(item,index) in home.brand.goods" :key="index">
                <div class="cnt">
                  <h4>{{item.make}}</h4>
                  <div class="data-reactid">
                    <span>{{item.price}}</span>
                    <span>元起</span>
                  </div>
                  <i class="u-icon"></i>
                </div>
                <img :src="item.imgUrl" alt=""></li>
            </ul>
          </div>
        </div>
        <!--详情页2和3-->
        <span v-if="home.news">
          <div class="m-indexFloor m-popularItemList" v-for="(items,index) in home.news" :key="index">
            <div class="hd" :style="{backgroundImage: `url(${items.bgdImg})`}">
              <a href="#" :class="{myColor1:+items.id===1,myColor2:+items.id===2}">
                <span>{{items.title}}</span>
                <span class="all">查看全部 ></span>
              </a>
            </div>
            <div class="m-goodGrid" v-if="items.list">
              <div class="inner inner1" :class="{inner1:+items.id===1,inner2:+items.id===2}">
                <ul class="list2">
                  <li class="item2" v-for="(item,index) in items.list" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <span class="item2-span">{{item.feature}}</span>
                    <span class="item2-span">{{item.meaning}}</span>
                    <span class="item2-span"><span>￥{{item.price}}</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </span>
        <!--详情页4-->
        <div class="m-indexFloor m-buy" v-for="(items,index) in home.human" :key="index">
          <h3>{{items.title}}</h3>
          <ul class="m-buy-list" v-if="items.goods">
            <li class="m-buy-item" v-for="(item,index) in items.goods" :key="index">
              <img :src="item.imgUrl" alt="sd">
              <div class="m-buy-chance">{{item.describe}}</div>
              <div class="m-buy-m">
                <span class="m2">{{item.usefor}}</span>
                <span class="m3"><span>￥{{item.price}}</span></span>
              </div>
            </li>
            <li class="m-buy-item">
              <div class="m-buy-text">
                <span>更多</span><span>{{items.title}}</span>
                <i></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    methods:{
      _initSwiper(){
        new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      },
      _initScrollOne(){
        new BScroll('.inner1',{
          click: true,
          scrollX: true
        })
        new BScroll('.inner2',{
          click: true,
          scrollX: true
        })
      },
      _initScroll(){
        new BScroll('.scroll',{
          click: true,
          scrollX: true
        })
      }
    },
    mounted(){
      this.$store.dispatch('getData',()=>{
        this.$nextTick(()=>{
          this._initScroll();
        })
      })
      this.$store.dispatch('getHome',()=>{
        this.$nextTick(()=>{
          this._initScrollOne()
        })
      })
    },
    computed:{
      ...mapState(['data','home'])
    },
    watch:{
      data(){
        this.$nextTick(()=>{
          this._initSwiper();
        })
      },
      home(){}
    }
  }
</script>

<style>
  body,html{
    background-color: #f4f4f4;
    overflow:hidden;
    overflow-y: auto;
  }
  .m-indexHd{
    position: relative;
  }
  a{
    list-style: none;
    text-decoration: none;
  }
  header{
    position: fixed;
    top:0;
    left: 0;
    z-index: 1000;
    background-color: #fff;
    width: 100%;
  }
  .line{
    display: flex;
    background-color: #ffffff;
    flex-direction: row;
    margin-top: 0.15rem;
  }
  #logo{
    font-family: "Microsoft Himalaya";
    display: inline-block;
    text-decoration: none;
    color: #444444;
    font-size: 0.35rem;
    padding: 0.1rem;
  }
  .m-topSearchIpt{
    width: 5.3rem;
    height: 0.7rem;
    color: #666666;
    margin-left: 0.22rem;
    background-color: #ededed;
    border-radius: 0.18rem;
    text-align: center;
    line-height: 0.7rem;

  }
  .scroll{
    background-color: #ffffff;
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  .list{
    font-size: 0;
    min-width: 100rem;
    margin-right: 0rem;
    list-style: none;
    padding: 0;
  }
  .list_item{
    list-style: none;
    display: inline-block;
    padding: 0 .21333rem;
    line-height: .8rem;
    font-size: .37333rem;
    color: #333;
    text-align: center;
  }
  .homeContainer{
    position: relative;
    top: 1.67rem;
    bottom: 1.67rem;
    height: 13.34rem;
  }
  .Container{
    margin-bottom: 1rem;
  }
  .swiper-container{

  }
  .swiper-wrapper{
    width: 600%;
    height: 4rem;
    font-size: 0;
  }
  .swiper-slide{
    float: left;
  }
  .swiper-slide img{
    width: 100%;
    height: 4rem;
    display: inline-block;
  }
  .swiper-pagination-bullet{
    width: 0.3rem;
    height: 0.05rem;
  }
  .swiper-pagination-bullet-active{
    background: white;
  }
  .g-grow{
    display: flex;
    flex-direction: row;
  }
  .m-indexServicePolicy{
    background-color: #ffffff;
  }
  .item{
    height: 0.72rem;
    width: 33%;
    text-align: center;
    line-height: 0.72rem;
  }
  .item i{
    display: inline-block;
    background-size: 0.42rem 0.42rem;
    width: 0.42rem;
    height: 0.42rem;
    background-image: url("./image/icon.png");
    line-height: 0.72rem;
    position: relative;
    top: 0.1rem;
  }
  .m-indexFloor{
    margin-top: 0.3rem;
    height: 100%;
    background-color: #ffffff;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1.1rem;
  }
  .hd i{
    display: inline-block;
    background-size: 0.42rem 0.42rem;
    width: 0.42rem;
    height: 0.42rem;
    line-height: 0.72rem;
    position: relative;
    top: 0.1rem;
  }
  .list1{
  }
  .item1{
    display: inline-block;
    position: relative;
    margin-bottom: .10667rem;
    margin-left: 0.08rem;
    width: 47%;
    height: 3.14667rem;
    background-color: #f4f4f4;
  }
  .cnt{
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 0.2rem;
    font-size: 0.16rem;
  }
  .cnt h4{
    height: 0.5rem;
  }
  .data-reactid{
    position: absolute;
  }
  .u-icon{
    display: inline-block;
    position: absolute;
    top: 270%;
    left: 0%;
    width: 0.64rem;
    height: 0.32rem;
    background-image: url("./image/ctn_icon.png");
    background-size: 0.64rem 0.32rem;
  }
  /*详情2样式*/
  .m-popularItemList{
    margin-top: 0.0rem;
    position: relative;
  }
  .m-popularItemList >.hd{
    height: 2.6rem;
    margin-bottom: .42667rem;
    position: relative;
    background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png");
  }
  .m-popularItemList a{
    display: block;
    width: 100%;
    height: 1.8rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    line-height: 1.5rem;
  }
  .m-popularItemList a>span{
    display: block;
    font-size: 0.32rem;
  }
  .m-popularItemList a .all{
    display: inline-block;
    text-align: center;
    height: 0.5rem;
    width: 2rem;
    position: absolute;
    top: 1.1rem;
    left: 2.76rem;
    line-height: 0.5rem;
    font-size: 0.24rem;
    background-color: bisque;
  }
  .m-goodGrid{
    height: 100%;
  }
  .list2{
    width: 200rem;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    height: 4.6rem;
  }
  .item2{
    display: flex;
    flex-direction: column;
    width: 2.8rem;
    height: 100%;
    margin-left: 0.2rem;
  }
  .item2 img{
    background: #f4f4f4;
  }
  .item2-span{
    font-size: 0.3rem;
    text-align: left;
    color: #333;
    padding: .1rem;
    display: block;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
  .item2>span:nth-child(3){
    font-size: 0.14rem;
    color: #999;
  }
  .item2-span span{
    list-style: none;
    color: red;
  }
  .m-buy{
    height: 18.5rem;

  }
  .m-buy-list{

  }
  .m-buy-list img{

    display: block;
    background-color: #f4f4f4;
  }
  .m-buy-item{
    width: 3.45rem;
    height: 5.54rem;
    margin: 0.15rem 0 0 0.2rem;
    float: left;
  }
  .m-buy-m{
    margin-top: -0.2rem;
  }
  .m2,.m3{
    font-size: 0.28rem;
    padding: .1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display:block;
    width: 100%;
    height: 0.56rem;
    margin-top: -0.1rem;
    line-height: 0.4rem;
  }
  .m-buy-chance{
    position: relative;
    top: 0.84rem;
    height: 0.8rem;
    line-height: 0.6rem;
    background-color: #F1ECE2;
    text-align: left;
    padding: 0.1rem;
    margin: -0.85rem 0 0 0;
    color: #9F8A60;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
  .m-buy-m{
    position: relative;
    top: 0.98rem;
  }
  .m3 span{
    color: red;
  }
  .m-buy-text{
    width:100% ;
    height: 4.25rem;
    background-color: #f4f4f4;
    line-height: 4.00rem;
  }
  .m-buy-text span{
    color: #666;
    font-size: 0.32rem;
  }
  .m-buy-text i{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    position: relative;
    z-index: 1000;
    top: -1.6rem;
    left: 1.35rem;
    background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goodGridMore-233aaf669a.png");
    background-repeat: no-repeat;
    background-size: 0.6rem 0.6rem;
  }
  .myColor1{
    color: #8BA0B6;
  }
  .myColor2{
    color: #B4A078;
  }
</style>

