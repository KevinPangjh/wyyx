<template>
  <div class="g-bd">
    <div class="navBar">
      <div class="cartTitle">购物车</div>
      <div class="cartTicket">领券</div>
    </div>
    <div class="shopcartList">
      <ul class="m-servicePolicy">
        <li class="item"><i></i>30天无忧退货</li>
        <li class="item"><i></i>30天无忧退货</li>
        <li class="item"><i></i>30天无忧退货</li>
      </ul>
      <div class="container">
        <div class="bgimg" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)">
        </div>
        <div class="text">买点什么吧</div>
        <div class="login">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

<style lang="less">
  .g-bd{
    .navBar{
      position: relative;
      width: 100%;
      background-color: #fff;
      height: 1.17333rem;
      .cartTitle{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        height: 1.17333rem;
        width: 100%;
        font-size: .34rem;
        text-align: center;
        line-height: 1.17rem;

      }
      .cartTicket{
        position: absolute;
        width: 1rem;
        right: 0.1rem;
        top: 0.37rem;
        color: red;
      }
    }
    .shopcartList{
      background-color: #f4f4f4;
      .m-servicePolicy{
        display: flex;
        flex-direction: row;
        padding-top: 0.2rem;
        .item{
          width: 33%;
          text-align: center;
          i{
            display: inline-block;
            padding: 0.05rem;
            width: .15rem;
            height: 0.15rem;
            border-radius: 50%;
            border: 1px solid #999;
          }
        }
      }
      .container{
        position: relative;
        height: 11rem;
        .bgimg{
          width: 2.48rem;
          height: 2.48rem;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin:auto;
          background-repeat: no-repeat;
          background-size: 2.48rem 2.48rem;
        }
        .text{
          position: absolute;
          top: 63%;
          color: #999;
          width: 100%;
          height: 0.4rem;
          font-size: 0.28rem;
          text-align: center;
          line-height: 0.4rem;
        }
        .login{
          position: absolute;
          top: 70%;
          left: 20%;
          width: 60%;
          height: 1rem;
          font-size: 0.32rem;
          background-color:#b4282d;
          color: white;
          font-weight: bold;
          text-align: center;
          line-height: 1rem;
        }
      }
    }
  }
</style>

