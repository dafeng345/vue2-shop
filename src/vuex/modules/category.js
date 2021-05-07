import Util from '../../util/common'
// 当types.js使用export输出多个对象时，使用对象的方式来接收
import * as types from '../types'

const state = {
  tabIndex:0
}

const mutations = {
  [types.CHANGE_TABINDEX] (state,res) {
    state.tabIndex = res
  }
}


export default {
  state,
  mutations
}
