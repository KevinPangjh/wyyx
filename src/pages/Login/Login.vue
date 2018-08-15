<template>
  <div class="loginWrap">
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
    <div class="warpBox">
      <div class="logoBg">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
      </div>
      <input type="text" class="phone" placeholder="请输入手机号码" v-model="phone">
      <input type="text" class="code" placeholder="请输入验证码" v-model="code">
      <span class="getCode">获取验证码</span>
      <div class="programBox">
        <span class="program">遇到问题</span>
        <span class="usePaw">使用密码登录</span>
      </div>
      <div class="btnWrap">
        <div class="w-button" @click="loginPhone">
          <span class="btnTxt" >登录</span>
        </div>
        <div class="w-button" @click="gotoLigin('/profile')">
          <span class="btnTxt">其他方式登录</span>
        </div>
        <div class="btn">快速注册></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        phone:'',
        code:''
      }
    },
    computed:{
      getPhone(){
        return /[0-9-()()]{7,18}/.test(this.phone)
      }
    },
    methods:{
      gotoLigin(path){
        this.$router.replace(path)
      },
      loginPhone(){
        if(!this.getPhone){
          window.confirm("手机号码不合法");
          return
        }
        else if(!this.code){
          window.confirm("请输入正确的密码");
          return
        }
        else{
          this.$router.replace('/home');
        }
      }
    }
  }
</script>

<style lang="less">
  .loginWrap{
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
    .warpBox{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 8rem;
      margin-top:0.92rem ;
      .logoBg{
        margin-bottom: 0;
        width: 100%;
        text-align: center;
        img{
          margin-top: 0.7rem;
          width: 2.56rem;
          height: .85333rem;
        }
      }
      input{
        box-sizing: border-box;
        padding: 0.2rem;
        display: block;
        height: 0.9rem;
        width: 85%;
        font-size: 0.26rem;
        line-height: 0.9rem;
        border: 0px;
        outline: none;
        cursor: pointer;
        border-bottom: 1px solid #d9d9d9 ;
      }
      .phone{
        margin-top: 0.5rem;
      }
      .clearPhone,.getCode{
        position: relative;
        display: block;
      }
      .clearPhone{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        text-align: center;
        color: #333;
        font-size: 0.20rem;
        background: #fff;
        border: 1px solid #7F7F7F;
        border-radius: 50%;
        top: -0.65rem;
        left: 2.55rem;
      }
      .getCode{
        width: 1.5rem;
        height: 0.5rem;
        text-align: center;
        color: #333;
        font-size: 0.24rem;
        background: #fff;
        line-height: 0.5rem;
        border: 1px solid #7F7F7F;
        border-radius: 4px;
        top: -0.75rem;
        left: 2.5rem;
      }
      .programBox{
        margin-top: -0.2rem;
        width: 7.5rem;
        span{
          height: 0.3rem;
          line-height: 0.3rem;
          color: #999;
        }
        .program{
          margin-left: 0.5rem;
        }
        .usePaw{
          margin-left: 3.6rem;
        }
      }
      .btnWrap{
        position: relative;
        bottom: 7.5rem;
        width: 100%;
        height: 4.5rem;
        top: 0.4rem;
        .w-button,.btn{
          position: absolute;
          left: 5%;
          width: 90%;
          height: 1.0rem;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          color: white;
          text-align: center;
          line-height: 1rem;
          font-size: 0.28rem;
        }
        .w-button{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          .btnTxt{
            display: block;
          }

        }
        .w-button:nth-child(2){
          top: 45%;
          border: 1px solid #b4282d;
          background-color: white;
          color: red;
        }
        .btn{
          top: 90%;
          color: #666;
          border: none;
          background-color:#F2F5F4;
          height: 0.5rem;
          line-height: 0.5rem;
        }
      }
    }
  }
</style>
