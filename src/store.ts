import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/api/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    topics: {},
    fetchIng: false
  },
  mutations: {
    setTopics(state, topics) {
      state.topics = topics;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setFetchIng(state, fetchIng) {
      state.fetchIng = fetchIng;
    }
  },
  actions: {
    getCategories({commit}) {
      API.getCategoriesData().then((res: any) => {
          console.log(res);
          commit('setCategories', res.data);
      });
    },
    getTopics({commit, state, dispatch}, {id}) {
      console.log(id);
      commit('setFetchIng', true);
      API.getCategoriesTopic(id).then((res: any) => {
          console.log(res);
          commit('setTopics', res);
          commit('setFetchIng', false);
      });
    }
  },
  getters: {
    categories: state => state.categories,
    topics: state => state.topics
  }
});
