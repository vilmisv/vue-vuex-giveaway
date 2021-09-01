import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// function get(url) {
//   return new Promise(resolve => {
//       return fetch(url).then(res => res.json()).then(data => resolve(data))
//   })

// }

export default new Vuex.Store({
  state: {
      gamesList: [],
      sortList: [],
      oneGame: null,
      sortGameList: [],
      gameListPage: [],
  },
  mutations: {
    setData(state, payload){
      state.gamesList = payload
    },
    setGame(state, oneGame) {
      state.oneGame = oneGame
    },
    setSortList(state, payload) {
      state.sortGameList = payload
    },
    setListPage(state, payload) {
      state.gameListPage = payload
    }
  },
  actions: {
    async getData(context, data) {
      let url = "http://167.99.138.67:4545/giveaways/all"
      const res = await fetch(url)
      const json = await res.json()
      data = json

    context.commit('setData', data)
    },
    async getGame(context, id) {
      const res = await fetch('http://167.99.138.67:4545/giveaways/id/'+id)
      const json = await res.json()
      context.commit('setGame', json)     
    },
    async getSort(context, payload) {
      let url = `http://167.99.138.67:4545/giveaways/sort/${payload.platform}/${payload.type}/${payload.sort}`
      const res = await fetch(url)
      const json = await res.json()
      context.commit('setSortList', json)

      console.log(json)
    },
    getListPage({commit, state}, payload) {
      const gameListArr = state.gamesList;
      
      const first = payload - 10;
      const last = payload
      const newArr = gameListArr.slice(first, last)
      console.log('new', newArr)

      commit('setPageList', newArr)
    }
    
  },
  modules: {
  },
})
