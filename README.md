##day01
* 阿里巴巴的字体太小，给iconfont添加字体大小
* 水平元素排列布局，不换行，需要三层嵌套div -> ul ->li
  给div加上width：100% ，overflow：hidden ，white-space:onwarp
* 轮播图静态样式不切换，因为父容器的长度没有给
  :问题已经解决

##day02
* 轮播图没有指示器
 * 没有加指示器的div
 * 没有将swiper的样式导入

##day03
* this.$ste.dispatch()   //报错dispatch is undefined
 * 全局的store没有注册
 * ajax请求没有写成函数 exprot const reqData = ()=> ajax('/data')
 * mock的路径出错了，和ajax的路径不一致('./data') 和('/data')
* 三层表达式带来的问题
 * ul和li的嵌套
 * 将判断写在ul里面，写在li的问题是，就算不成立，也会加载，因为取数据的时候，可能有时候成功
* 在处理better-Scoll的时候，需要用到的才去初始化，如果用不到就不要初始化
