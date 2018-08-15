<template>
  <div class="g-bd">
    <header class="searchContainer">
      <div class="search">搜索商品, 共12028款好物</div>
    </header>
   <div class="container">
     <div class="navContainer">
       <ul class="j-cateNav" v-if="mark.navlist">
         <li class="item" v-for="(item,index) in mark.navlist" :key="index" @click="getIndex(index)">
           <a href="javascript:;" class="txt" :class="{add: currentIndex === index}" >{{item.name}}</a>
         </li>
       </ul>
     </div>
     <div class="goodsContainer">
       <div class="goodsList" v-if="mark.goodslist">
         <div class="banner" :style="{backgroundImage:`url(${mark.goodslist[currentIndex].imgUrl})`}"></div>
         <ul class="goodsUl">
           <li class="goodsLi" v-for="(item,index) in mark.goodslist[currentIndex].goods" :key="index">
             <img :src="item.imgUrl" alt="" class="goodsImg">
             <div class="txt">{{item.txt}}</div>
           </li>
         </ul>
       </div>
     </div>
   </div>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  export default {
    data(){
      return{
        currentIndex:0,
      }
    },
    mounted(){
      this.$store.dispatch("getMark",()=>{

      })
    },
    computed:{
      ...mapState(["mark"])
    },
    methods:{
      getIndex(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style lang="less">
  .searchContainer{
    box-sizing: border-box;
    position: fixed;
    z-index: 100;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.0rem;
    padding: 0.2rem;
    color: #999;
    &::after{
      content: '';
      position: absolute;
      background-color: #d9d9d9;
      left: 0;
      width: 100%;
      height: 1px;
      -webkit-transform-origin: 50% 100% 0;
      transform-origin: 50% 100% 0;
      bottom: 0;
    }
    .search{
      width: 100%;
      height: 0.6rem;
      background-color: #f4f4f4;
      line-height: 0.6rem;
      text-align: center;
    }
  }
  .container{
    margin-top: 1.0rem;
    display: flex;
    flex-direction: row;
    .navContainer{
      width: 1.67rem;
      max-width: 25%;
      border-right: 1px solid  #d9d9d9;
      .j-cateNav{
        margin-top: 0.3rem;
        .item{
          width: 100%;
          height: 0.8rem;
          text-align: center;
          line-height: 0.8rem;
          .txt{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 0.5rem;
            letter-spacing:2px;
            font-size: 0.22rem;
            color: #666;
            list-style: none;
            text-decoration: none;
            &.add{
              border-left: 1px solid red;
              color: red;
            }
          }
        }
      }
    }
    .goodsContainer{
        margin-right: -3.3rem;
        max-width: 80%;
      .goodsList{
        margin: 0.29rem;
        .banner{
          width: 5.28rem;
          position: relative;
          height: 1.92rem;
          display: table;
          margin-bottom: .42667rem;
          background: center no-repeat #f4f4f4;
          background-size: cover;
          border-radius: 4px;
        }
        .goodsUl{
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          .goodsLi{
            width: 1.8rem;
            height: 1.66rem;
            margin-right: -0.1rem;
            margin-bottom: 0.8rem;
            .txt{
              text-align: center;
              font-size: 0.24rem;
              color: #666;
            }
          }
        }
      }
    }
  }
</style>
