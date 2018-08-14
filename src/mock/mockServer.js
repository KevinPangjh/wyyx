import Mock from "mockjs"

import data from './data'
import home from './home'

//返回的是data的请求，包括导航菜单和轮播图
Mock.mock('/data',{code:0 , data:data});
Mock.mock('/home',{code:0 , data:home});

