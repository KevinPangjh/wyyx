<template>
  <div class="profile">
    <!--头部图片-->
    <div class="header">
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
    </div>
    <!--背景图片-->
    <div class="profileImg">
      <div class="bgImg">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
    </div>
    <!--按钮登录-->
    <div class="btnWrap">
      <div class="w-button" @click="gotoLigin('/login')">
        <span class="btnImg" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)"></span>
        <span class="btnTxt">手机号码登录</span>
      </div>
      <div class="w-button" @click="gotoLigin('/mail')">
        <span class="btnImg" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)"></span>
        <span class="btnTxt">邮箱快速登录</span>
      </div>
      <div class="btn">手机号快速注册 ></div>
    </div>
    <!--三个登录-->
    <div class="thirdWrap">
      <span class="item">
        <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI5M0JDMTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDMDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ex4WyAAADVklEQVR42uyZfWiNURzH77VJGEqjeV+LeZu2+MNbyQh/IKFtJaKRl1IrLyWSmz+UoigarXlZIrIQeWkihVLSRC62P7D4wyUhL9ts1+dXv9Vaz3nuee59HjXdU5/O2nn7nvOc8/v9zrnheDwe6k6pR6ibpbTgtODuLjjTtmIkEpHJzYTFMA3GwkDtoxU+QxQewjV4BHFDX8EJpnOpsw62Q56hWk/IUYphFzTCQajWCQW/JRA7maweKl3EmtJobfcUpgYuGLFl+nknpjjGeLivXykYwYhdTnYWevl4Vqpgs++CESuHqcYwmXfQkKDPX/AEmh3KDsMcv1f4KPRxWnjIZUL55McM/YmVGAVTdN+2O4xXTR+9fRFMRzPI5hrqnqG8w0zVGercgJj+LYfto0OdXCj3y6ytcjcakQryFpcBV0KtHtYyNXNOqVy/pOcU7hxeIkg+6bgEbdogI0GdP10W47VOQmzzD21/iPHaUhXc6sX7JUjS1wk4DsNhARTBMBgA3+CDbp3rcIvxW7wK9iuafwzrYR5sg0EWbWTvHxBLgo5mWyvhhwu9ABvVju+3FBvSelK/HsGTbAVHUxRbp7b2jsVZMCVp9wDRxTaCb6cg9hPsgKvQP8WJ94PLavNdBVeZQkKLtAf2asjZNV2ES4Z2L9URxbr8XyZdg+iwm+OQxqeSECsn/jksdCgToSWwDE46lM9m3E3kSxzKxFsuSuSat8Ibj4JvwlJDWZ66+r6Q71A+QfMiQ/vVRrPWaaWlk3uQbSlYJlnqEvd+VWeR5VDWri7c5BVj6BmcKLx8QTbLw0q/dxkwpI4iy8VS5SQwd1YBfFSjrlcWguPqsoNI7V5uzeL3h1h0Ku72bUCCG7xcQud3sqlN6jpDuvIFMBQkth0Dd/UC6ne64kVwqQrdJ4FMR3BiuKaPVFuc4aPY33DEi2CJotbaRFF6fZLOK3wUvJuxm6wFU/mcxwF2iiOAQh/E1uq7RqBPVT81pHyWYj/iHVc4hbtBvK3F9EnrdJLtxX2XmLZhUI+B32ENTNfozYuNbnG7OoWT+ckgice8bL2NF6o1yVJ33ai3E9lCG2ALfIERpttPZujfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=)"></i>
        <span class="name">微信</span>
      </span>
      <span class="item">
        <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUJBRTQ1MDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDODkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4pjhZyAAACIUlEQVR42uyZPUjDQBTHU621gq2KHdSiIurQrdgOOlhpQfzCuSAoFCelFNRdCm4u4iCujl2cRFHo5qKguDjoIC4VRBCs+K1Y/4cnhKLF9N5LKeTBjzva3OXHy+WSu9hyuZxWTlGhlVlYwpZwXtiLaZRMJn/7eQCMgyBoBTXgBWTACdgC6QLt+YTzwgdWweAf/3eAfpAA+2AOHJdqSIyC0wKy+SHEj5DhaCmEA2C7yD5SkA6bKewAe4pXZwfSdWYJL4NGRWEnWDPayGb00YysuFFkCWeqZvR5zZnhqEYbU9xDYoxYeIRbOEgsHMCQcLAIo2MvCi+xsAt0cWWYWvYnWriEa5mEXVzCj0zCT1zCHiZhD5dwgkk4Tv6kkzNEhvHd3IdznFFmeIZ5MRGnHhLTzMKTyLCNRBgdhVA0MQu75RKLJMMxk9aYMeWbTl6mW9BggvCrOA/O+ayS4V6TZEVUg4jqkAhr5kZYVbhHV88ySd7p6n5V4U5ZrjDOxQtgUdbbVIX98uab1+TODUMcov8lWe9WFRaSE7IuZosrYtl7cKFbLqWpV81iEZoiFJ5Fn+tsy3wpvYtiiED2AH31mbGRMgw2FGU3jcqqCIutVdWPIx8QjhhtZGhI4ARi31dsmbYTjuEbEELf5/852Oj+sFtm9lL73hCsklfpU2RMvgsIHoB4H3DKhatTPnbtuuPfwRuoBPWsN10pw/ooYwmXu/CXAAMA+zyBlSoNLhoAAAAASUVORK5CYII=)"></i>
        <span class="name">QQ</span>
      </span>
      <span class="item">
        <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUJBRTQ1ODkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUJBRTQ1NzkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DmdgDAAAEUUlEQVR42uxYa2iOYRjeZlhOMwyLzWFTzsc55jj2Qw5FTEQWkR+OOS2SJWnL4QfSHHOsGRp+YDQk50aKwuaQmTRiK2ezfa67rq+enp73/b7nm8NW311Xz/s+x/u9n/v4hno8npDaRGEhtYyCDAcZDjL8jyncZnJ6enp1z2sIHARGAi3Y9xa4B5wBsnHG55ok4VHAFIVZoRhgPLAXeAmG57ltEGoTOP6AhFsCt4D2lGw4+0K1eSeAmTjv539l2LQefU0p4ZVAT43paRj3/EmVaAzMoF5eBa4Ay4E6Fh9RDhzFY19gkzI0FVhULaNTqBmQBswHIrUxMahojpsYlOs/CSQDIr07wFb056Fdy1tYw+kb8X4EKKuOhOcChbzCSIc5KT48xSTeThMyfgFMbeD4euChcoOzA1IJbBhFyewDmvuY3tRlH3Fb04FtwH7gK4fWYWwU8ItjXppgrRLYJF6kACT4+X3PlOd61M/u2Ec+9It4Cjwf595Z9BzhVDGxg/PK+t5WEsaGidwwwUJtXgITgRzgA9eLn80AdgAF2PeE6DNQwHGh7jyzlB/mtRf/JIyFPdBccrtiFx1O8TFHAsgY7t+YfV94rniZ+uyr9EvCWNQuQGZtKJ5tIduzbLspwiz2KWEwG8HFrf5yqH7OVoxwOc4t4XtHZc4Nf1RiixZ1TFQE5AOPgSfAN+AT84TWXD8cGGAIvd7rv0YBVaEpUcbyqP8isI2uoRmLB6O56cCkHLIb2AM89VOKkjcsYNRqoPR7GCEP4Mzr/l6JieHbaAYa5h4ClgFlAV5/HCCubJBh7DKQirNfWyXwWDDEwGwFk5BUjVnxqaupFi/oe88BcxxUTYxnNGCSZhJ9c5xtxTHLMGcGNsrR+2gwGTysAy1+LKPXXaCNwZi/0sC+G86R+TttGU7S3kW/Tmp9IsFjLnmEUB+G8VAD0yVMHU00jumm3wx31N4ztXepDrY77HUa+Ki8i66OcJj7wIWfGBuGVd0rxdcWGlShoeJDN1AFyoFVWg4h1MvJ2F14KrUpQotpzV5j06kLW/G9iUqmVaFEK90Nmmi4Q/8dCOmjjYTzVCPA4mht/APbXIVZJ8bEX1406HBX0VUHfjJtjU7y0F/KtS006Km3fInl82QGBp2y9DwAzErgOOxQQp3CeK6tH5YQq1aKaegbprzfYnrYicxIOD6l6LWXJJ9dqvVFsb+fgQ9xg6mB/vmRQnCXknxL+TJNGV/CQlPUI0Jb+wZYzCpYLdHl/ZGD7oraJPv6geKzzMcGog6bFaYu8j2f+in9/RkwKpgMSTJexfn1qasrgMGGI37Qy2TirMqAcwlDaZTBZNtLr8j0barFO35AXaAt0JUeJNmgKl5jzGENV2SbkPj1IwUbd6Zhpfhy7C4kiU22ZHvY73mgCbTtn58wBoOhQA8ilmG6kVLSvOdNiBHfZ2H5SP+L89cZrgkU/KEdZDjIcJBhd/otwADLKFf6Fop5QwAAAABJRU5ErkJggg==)" ></i>
        <span class="name">微博</span>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      gotoLigin(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="less">
  .profile {
    width:100%;
    height: 13.33rem;
    background-color: #F2F5F4;
   .header{
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
    }
   .profileImg{
     width: 100%;
     height: 12.5rem;
     .bgImg{
       width: 100%;
       height: 8.0rem;
       position: relative;
       img{
         position: absolute;
         top: 32%;
         left: 32%;
         width: 2.8rem;
         height: 1.0rem;
       }
     }
   }
   .btnWrap{
     position: relative;
     bottom: 7.5rem;
     width: 100%;
     height: 4.5rem;
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
       btnImg.btnTxt{
        display: block;
       }
       .btnImg{
         width: 0.6rem;
         height: 0.6rem;
         margin-right: 0.1rem;
         background-size: 90%;
         background-position: 0rem -0.65rem;
         background-repeat: no-repeat;
       }
     }
     .w-button:nth-child(2){
       top: 29%;
       border: 1px solid #b4282d;
       background-color: white;
       color: red;
       .btnImg{
         background-position: 0rem 0rem;
       }
     }
     .btn{
       top: 54%;
       color: #666;
       border: none;
       background-color:#F2F5F4;
       height: 0.5rem;
       line-height: 0.5rem;
     }
   }
   .thirdWrap{
     display: flex;
     flex-direction: row;
     justify-content: center;
     position: relative;
     bottom: 5.5rem;
     width: 100%;
     height:.53333rem;
     .item{
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-content: center;
       width: 20%;
       height:.6rem;
       text-align: center;
       line-height:.67rem;
       .icon,.name{
         display: inline-block;
       }
       .icon{
         width: 0.5rem;
         height: 0.6rem;
         background-size: 90%;
         background-position-y: 0.09rem;
         background-repeat: no-repeat;
       }
     }
   }
  }
</style>

