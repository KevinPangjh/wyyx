import {
  DATA,
  HOME,
  KNOW,
  MARK
} from './mutation-types'

export default {
  [DATA](state,{data}){
    state.data = data;
  },
  [HOME](state,{home}){
    state.home = home;
  },
  [KNOW](state,{know}){
    state.know= know;
  },
  [MARK](state,{mark}){
    state.mark= mark;
  },
}
