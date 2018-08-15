<template>
  <div class="j-bd">
    <!--头部的布局-->
    <div class="containerBox">
      <div class="hdWraper">
        <header class="search">
          <div class="bd">
            <a class="u-icon-home" href="/home"></a>
            <a class="logo" href="/home"></a>
            <div class="right">
              <a class="search" href=""></a>
              <a class="cart" href="/shopcart"></a>
            </div>
          </div>
        </header>
      </div>
    </div>
    <!--轮播图-->
    <div class="swiper-container banner" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in know.banner" :key="index">
          <img :src="item" alt="banner">
        </div>
      </div>
    </div>
    <!--滑动的图-->
    <div class="swiper-container case">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(items,index) in know.navList" :key="index">
          <div class="imgContainer" :style="{backgroundImage:`url(${items.imgUrl})`}">{{items.count}}</div>
          <div class="imgContainerText">{{items.title}}</div>
        </div>
      </div>
    </div>
    <!--第一个商品详情-->
    <div class="container" v-if="know.like">
      <div class="module-title">{{know.like.title}}</div>
      <!--头部的banner-->
     <div  v-if="items.hearder" v-for="(items,index) in know.like.choose" :key="index">
       <a href="javascript:;" class="m-mainPosItem" >
         <div class="imgContainer" :style="{backgroundImage: `url(${items.hearder.imgUrl})`}">
           <div class="m-exploreTag">{{items.hearder.recommend}}</div>
         </div>
         <div class="line1">
           <div class="title">{{items.hearder.home}}</div>
           <div class="price"><span>{{items.hearder.price}}</span><span>元起</span></div>
         </div>
         <div class="line2">
           <div class="subTitle">{{items.hearder.active}}</div>
         </div>
       </a>
       <!--下面的详情-->
       <a href="javascript:;" class="m-minorPosItem" v-for="(item,index) in items.goodsLists" :key="index">
         <div class="left">
           <div class="author-container">
             <img :src="item.averta" alt="author" class="author">&nbsp;&nbsp;{{item.name}}
           </div>
           <div class="line1">{{item.line1}}</div>
           <div class="line2">{{item.line2}}</div>
         </div>
         <div class="right" :style="{backgroundImage:`url(${item.imgUrl})`}">
           <div class="topicTag">{{item.perv}}</div>
         </div>
       </a>
     </div>
    </div>
    <!--十点一刻-->
    <div class="m-exploreTenFifteen" v-if="know.fifex">
      <div class="module-title">{{know.fifex.title}}</div>
      <a href="javascript:;" class="m-mainPosItem">
        <div class="swiper-container fifteen">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in know.fifex.talk" :key="index">
              <img class="imgContainer" :src="item">
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    methods:{
      _initSwiper(){
        new Swiper('.banner', {
          loop: true,
          pagination: '.banner .swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 8,
        })
        new Swiper('.case', {
          pagination: '.case .swiper-pagination',
          slidesPerView: 4,
          slidesPerColumn: 1,
          paginationClickable: true,
          spaceBetween: 10
        })
        new Swiper('.fifteen', {
          pagination: '.fifteen .swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 8,
        });
      }
    },
    mounted(){
      this.$store.dispatch("getKnow",()=>{
        this.$nextTick(()=>{
          this._initSwiper()
        })
      })
    },
    computed:{
      ...mapState(["know"])
    }
  }
</script>

<style lang="less">
  #app{
    background-color: #f4f4f4;
    a{
      list-style: none;
      text-decoration: none;
      color: #666;
    }
    .j-bd {
      width:100%;
      margin-bottom: 1rem;
      /*头部样式*/
      .containerBox{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 0.9rem;
        background-color: #ffffff;
        padding: 0.2rem 0.12rem;
        .hdWraper{
          .search{
            width: 7.16rem;
            background-color: #fafafa;
            .bd{
              display: flex;
              flex-direction: row;
              position: relative;
              border-bottom: 1px solid #e9e9e9;
              a{
                list-style :none;
              }
              .u-icon-home{
                width: .64rem;
                height: .58667rem;
                margin-left: 0.2rem;
                background-image: url("./images/11.png");
                background-position: 0 -0.75rem;
                background-size: 1.8rem;
              }
              .logo{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                width: 2.29333rem;
                height: .72rem;
                background-image: url("./images/11.png");
                background-position: 0 -1.27rem;
                background-size: 1.8rem;
                background-repeat: no-repeat;
              }
              .right{
                margin-left: auto;
                margin-right: .06667rem;
                width: 1.47rem;
                height: 0.63rem;
                a{
                  list-style: none;
                  display: block;
                }
                .search{
                  width: 0.85333rem;
                  height: 0.6rem;
                  background-image: url("./images/11.png");
                  background-size: 1.8rem;
                  background-repeat: no-repeat;
                  background-position-y: -3.48rem;
                  position: absolute;
                  right: 0.8rem;
                  top: -0.1rem;
                }
                .cart{
                  width: 0.85333rem;
                  height: 0.6rem;
                  background-image: url("./images/11.png");
                  background-size: 1.8rem;
                  background-repeat: no-repeat;
                  position: absolute;
                  right: 0rem;
                  top: -0.1rem;
                }
              }
            }
          }
        }
      }
      .banner{
        margin-top: 1.0rem;
      }
      /*轮播图*/
      .swiper-container {
          width: 100%;
          height: 100%;
          .swiper-wrapper{
            .swiper-slide {
              text-align: center;
              font-size: 18px;
              background: #fff;
              /* Center slide text vertically */
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;
              align-items: center;
              width: 90%;
            }
          }
        }
      /*第二个轮播图*/
      .case{
          margin: 0.5rem 0 0.2rem 0;
          background-color: #ffffff;
          width: 100%;
          .swiper-wrapper{
            .swiper-slide{
              width: 3.28rem;
              height: 2.3rem;
              position: relative;
              .imgContainer{
                color: #999999;
                text-align: right;
                font-size: 0.32rem;
                width: 100%;
                height: 100%;
                background-size:3.28rem 1.64rem ;
                background-position:top;
                background-repeat:no-repeat;
              }
              .imgContainerText{
                position: absolute;
                top: 78%;
                width: 100%;
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0.3rem;
                text-align: center;
              }
            }
          }
        }
      /*第一个商品详情*/
      .container{
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.2rem;
        .module-title{
          width: 100%;
          height: 1.2rem;
          line-height: 1.2rem;
          color: #666;
          font-size: 0.32rem;
          text-align: center;
        }
        .m-mainPosItem{
          list-style: none;
          text-decoration: none;
          border: 1px solid #d9d9d9;
          border-radius: .10667rem;
          overflow: hidden;
          display: block;
          width: 7.2rem;
          height: 100%;
          color: #333;
          margin-bottom: 0.2rem;
          .imgContainer{
            height:5.14667rem;
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
            border-radius: .10667rem .10667rem 0 0;
            position: relative;
            .m-exploreTag{
              box-sizing: border-box;
              padding: 0.1rem;
              height: 0.6rem;
              text-align: center;
              font-size: 0.32rem;
              display: inline-block;
              background-color: rgba(255,255,255,.9);
              border: 1px solid #d9d9d9;
              border-radius: .26667rem;
              position: absolute;
              top: .26667rem;
              left: .26667rem;
            }
          }
          .line1,.line2{
            display: flex;
            flex-direction: row;
            width: 100%;
            padding: .32rem .26667rem 0;
            .title,.price{
              height: 0.5rem;
              line-height: 0.5rem;
              font-size: 0.32rem;
              color: #333;
            }
            .price{
              margin-left: auto;
              margin-right: 0rem;
            }
          }
          .line2{
            .subTitle{
              height: 0.5rem;
              line-height: 0.5rem;
              font-size: 0.32rem;
              color: #666;
            }
          }
        }
        .m-minorPosItem{
          display: flex;
          flex-direction: row;
          border: 1px solid #d9d9d9;
          border-radius: .10667rem;
          margin-bottom: 0.2rem;
          width: 7.2rem;
          height: 2.72rem;
          .left{
            width: 4.34rem;
            .author-container{
              margin: 0.2rem 0 0.2rem 0.1rem;
              .author{
                width: 0.64rem;
                height: 0.64rem;
               vertical-align: middle;
                border-radius: 50%;
              }
            }
            .line1{
              margin-left: 0.2rem;
              font-size: 0.34rem;
              color: #666;
            }
            .line2{
              margin-left: 0.2rem;
              margin-top: 0.1rem;
              font-size: 0.28rem;
              color: #999;
              height: .68rem;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 0.34rem;
            }
          }
          .right{
            position: relative;
            margin-right: 0;
            width: 2.85rem;
            height: 2.69rem;
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
            .topicTag{
              box-sizing: border-box;
              padding: 0.1rem;
              height: 0.6rem;
              text-align: center;
              font-size: 0.28rem;
              display: inline-block;
              background-color: rgba(255,255,255,.9);
              border: 1px solid #d9d9d9;
              border-radius: .26667rem;
              position: absolute;
              top: .2rem;
              left: .2rem;
            }
          }
        }
      }
      /*十点*/
      .m-exploreTenFifteen{
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.2rem;
        .module-title{
          width: 100%;
          height: 1.2rem;
          line-height: 1.2rem;
          color: #666;
          font-size: 0.32rem;
          text-align: center;
          .m-mainPosItem{
            list-style: none;
            text-decoration: none;
            border: 1px solid #d9d9d9;
            border-radius: .10667rem;
            overflow: hidden;
            display: block;
            width: 7.2rem;
            height: 100%;
            color: #333;
            margin-bottom: 0.2rem;
            .swiper-container {
              width: 100%;
              height: 100%;
              .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
                width: 80%;
                display: flex;
                align-items: center;
                .imgContainer{
                  height:5.14667rem;
                  background-size:cover;
                  background-position:center;
                  background-repeat:no-repeat;
                  border-radius: .10667rem .10667rem 0 0;
                  position: relative;
                }
              }
            }
        }
      }
      }
    }
  }
</style>

