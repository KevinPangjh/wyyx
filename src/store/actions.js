import {
  reqData,
  reqHome
} from '../api'

import {
  DATA,
  HOME
} from './mutation-types'

export default {
  async getData({commit},cb){
    const result = await reqData()
    commit(DATA,{data: result.data})
    cb && cb()
  },
  async getHome({commit},cb){
    const result = await reqHome()
    commit(HOME,{home: result.data})
    cb && cb()
  }
}


