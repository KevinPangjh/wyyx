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
          <li class="list_item">推荐</li>
          <li class="list_item">鞋包</li>
          <li class="list_item">居家</li>
          <li class="list_item">服装</li>
          <li class="list_item">电器</li>
          <li class="list_item">推荐</li>
          <li class="list_item">鞋包</li>
          <li class="list_item">居家</li>
          <li class="list_item">推荐</li>
          <li class="list_item">鞋包</li>
          <li class="list_item">居家</li>
          <li class="list_item">服装</li>
          <li class="list_item">电器</li>
          <li class="list_item">推荐</li>
          <li class="list_item">鞋包</li>
          <li class="list_item">居家</li>
        </ul>
      </div>
    </header>
    <div class="homeContainer">
      <div class="Container">
        <!--轮播图部分-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./image/banner1.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="./image/banner2.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="./image/banner3.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="./image/banner4.jpg"/>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="m-indexServicePolicy">
          <ul class="g-grow">
            <li class="item"><i></i>网易自营品牌</li>
            <li class="item"><i></i>30天无理由退货</li>
            <li class="item"><i></i>48小时快速退款</li>
          </ul>
        </div>
        <!--详情页1-->
        <div class="m-indexFloor">
          <div class="hd">品牌制造商直供<i></i></div>
          <div class="m-indexManufacturersSupplying">
            <ul class="list1">
              <li class="item1">
                <div class="cnt">
                  <h4>CK制造商</h4>
                  <div class="data-reactid">
                    <span>25</span>
                    <span>元起</span>
                  </div>
                  <i class="u-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65" alt=""></li>
              <li class="item1">
                <div class="cnt">
                  <h4>CK制造商</h4>
                  <div class="data-reactid">
                    <span>25</span>
                    <span>元起</span>
                  </div>
                  <i class="u-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/cc056d931b009298769d65b94175d696.png?imageView&thumbnail=355x0&quality=65" alt=""></li>
              <li class="item1">
                <div class="cnt">
                  <h4>CK制造商</h4>
                  <div class="data-reactid">
                    <span>25</span>
                    <span>元起</span>
                  </div>
                  <i class="u-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65" alt=""></li>
              <li class="item1">
                <div class="cnt">
                  <h4>CK制造商</h4>
                  <div class="data-reactid">
                    <span>25</span>
                    <span>元起</span>
                  </div>
                  <i class="u-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/7f55f337f98a198ac3d629847171d5d2.png?imageView&thumbnail=355x0&quality=65" alt=""></li>
            </ul>
          </div>
        </div>
        <!--详情页2-->
        <div class="m-indexFloor m-popularItemList">
          <div class="hd">
            <a href="#">
              <span>新品首发</span>
              <span class="all">查看全部></span>
            </a>
          </div>
          <div class="m-goodGrid">
            <div class="inner inner1">
              <ul class="list2">
                <li class="item2">
                    <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <span class="item2-span">情定七夕 · 红玫瑰</span>
                    <span class="item2-span">玫瑰诉情，爱意难休</span>
                    <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--详情页3-->
        <div class="m-indexFloor m-popularItemList">
          <div class="hd" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)">
            <a href="#">
              <span>人气推荐 · 好物精选</span>
              <span class="all">查看全部></span>
            </a>
          </div>
          <div class="m-goodGrid">
            <div class="inner inner2">
              <ul class="list2">
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
                <li class="item2">
                  <img src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="item2-span">情定七夕 · 红玫瑰</span>
                  <span class="item2-span">玫瑰诉情，爱意难休</span>
                  <span class="item2-span"><span>￥88</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--详情页4-->
        <div class="m-indexFloor m-buy">
          <h3>居家好物</h3>
          <ul class="m-buy-list">
            <li class="m-buy-item">
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="m-buy-chance">硬度偏好者适用</div>
              <div class="m-buy-m">
                <span class="m1">居家特惠</span>
                <span class="m2">冬夏两用你懂得哈哈哈哈</span>
                <span class="m3"><span>￥1999</span></span>
              </div>
            </li>
            <li class="m-buy-item">
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="m-buy-chance">硬度偏好者适用</div>
              <div class="m-buy-m">
                <span class="m1">居家特惠</span>
                <span class="m2">冬夏两用你懂得哈哈哈哈</span>
                <span class="m3"><span>￥1999</span></span>
              </div>
            </li>
            <li class="m-buy-item">
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="m-buy-chance">硬度偏好者适用</div>
              <div class="m-buy-m">
                <span class="m1">居家特惠</span>
                <span class="m2">冬夏两用你懂得哈哈哈哈</span>
                <span class="m3"><span>￥1999</span></span>
              </div>
            </li>
            <li class="m-buy-item">
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="m-buy-chance">硬度偏好者适用</div>
              <div class="m-buy-m">
                <span class="m1">居家特惠</span>
                <span class="m2">冬夏两用你懂得哈哈哈哈</span>
                <span class="m3"><span>￥1999</span></span>
              </div>
            </li>
            <li class="m-buy-item">
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="m-buy-chance">硬度偏好者适用</div>
              <div class="m-buy-m">
                <span class="m1">居家特惠</span>
                <span class="m2">冬夏两用你懂得哈哈哈哈</span>
                <span class="m3"><span>￥1999</span></span>
              </div>
            </li>
            <li class="m-buy-item">
              <div class="m-buy-text">
                <span>更多</span><span>居家好物</span>
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
      _initScroll(){
        new BScroll('.scroll',{
          click: true,
          scrollX: true
        })
        new BScroll('.inner2',{
          click: true,
          scrollX: true
        })
        new BScroll('.inner1',{
          click: true,
          scrollX: true
        })
        new BScroll('.homeContainer',{
          click: true,
        })
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this._initScroll();
        this._initSwiper();
      })
    }
  }
</script>

<style>
  body,html{
    background-color: #f4f4f4;
    overflow:hidden;
    overflow-y:auto
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
    background-image: url("./image/left.png");
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
    width: 3.24rem;
    height: 1.8rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    line-height: 1.5rem;
    color: #999;
  }
  .m-popularItemList a>span{
    display: block;
    font-size: 0.38rem;
  }
  .m-popularItemList a .all{
    display: inline-block;
    text-align: center;
    height: 0.4rem;
    width: 2rem;
    position: absolute;
    top: 1.2rem;
    left:0.6rem;
    line-height: 0.4rem;
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
    width: 2.8rem;
    height: 100%;
    margin-left: 0.2rem;
  }
  .item2 img{
    background: #f4f4f4;
  }
  .item2-span{
    font-size: 0.18rem;
    text-align: left;
    padding: .1rem;
    display: block;
    height: 0.31rem;
    line-height: 0.31rem;
    margin-bottom: 0.1rem;
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
  .m-buy-m .m1{
    font-size: 0.22rem;
  }
  .m1,.m2,.m3{
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
</style>

