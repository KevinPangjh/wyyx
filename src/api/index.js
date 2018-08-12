/*与后台交互模块*/
import ajax from './ajax'
//获取导航菜单的数据和轮播图的数据
export const reqData = ajax('/data');
//获取主页的数据
export const reqHome = ajax('/home');

