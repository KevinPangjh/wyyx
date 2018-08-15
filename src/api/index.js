/*与后台交互模块*/
import ajax from './ajax'
//获取导航菜单的数据和轮播图的数据
export const reqData= ()=> ajax('/data');
//获取主页的数据
export const reqHome= ()=> ajax('/home');
//获取第二页的数据
export const reqKnow= ()=> ajax('/know');
//获取第三屏的数据
export const reqMark= ()=> ajax('/mark');

