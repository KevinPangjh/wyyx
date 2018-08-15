import {
  reqData,
  reqHome,
  reqKnow,
  reqMark
} from '../api'

import {
  DATA,
  HOME,
  KNOW,
  MARK
} from './mutation-types'

export default {
  async getData({commit},cb){
    const result= await reqData()
    commit(DATA,{data: result.data})
    cb && cb()
  },
  async getHome({commit},cb){
    const result= await reqHome()
    commit(HOME,{home: result.data})
    cb && cb()
  },
  async getKnow({commit},cb){
    const result= await reqKnow()
    commit(KNOW,{know: result.data})
    cb && cb()
  },
  async getMark({commit},cb){
    const result= await reqMark()
    commit(MARK,{mark: result.data})
    cb && cb()
  }
}


