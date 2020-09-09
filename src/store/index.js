import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
    stuInfo: {},
    nowPage: 1,
    totalPage: 1,
    count: 1,
    size: 2,
    list: [],
    searchValue: ''
  },
  mutations: {
    setSearchVal(state, val) {
      state.searchValue = val;
    },
    setNowPage(state, p) {
      state.nowPage = p;
    },
    setTotalPage(state, count) {
      state.totalPage = Math.ceil(count / state.size);
      state.count = count;
    },
    setList(state, list) {
      state.list = list;
    },
    isShowModal(state, {
      show
    }) {
      state.showModal = show
    },
    changeStuInfo(state, {
      info
    }) {
      state.stuInfo = info
    }
  },
  actions: {
    async findByPage({
      commit,
      state
    }, page) {
      const {
        cont,
        findByPage
      } = await api.findByPage(page, state.size);
      commit("setTotalPage", cont);
      commit("setNowPage", page);
      commit("setList", findByPage)
    },
    async searchPage({
      commit,
      state
    }, page) {
      const {
        cont,
        searchList
      } = await api.searchStu({
        search : state.searchValue,
        page,
        size : state.size
      });
      commit("setTotalPage", cont);
      commit("setNowPage", page);
      commit("setList", searchList)
    }
  },
  modules: {}
})