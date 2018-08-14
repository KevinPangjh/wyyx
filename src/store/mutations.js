import {
  DATA,
  HOME
} from './mutation-types'

export default {
  [DATA](state,{data}){
    state.data = data;
  },
  [HOME](state,{home}){
    state.home = home;
  }
}
