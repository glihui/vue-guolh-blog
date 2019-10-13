import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/api/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    topics: {},
    fetchIng: false,
    user: {}
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
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    getCategories({commit}) {
      API.getCategoriesData().then((res: any) => {
          console.log(res);
          commit('setCategories', res.data.data);
      });
    },
    getTopics({commit, state, dispatch}, {id}) {
      console.log(id);
      commit('setFetchIng', true);
      API.getCategoriesTopic(id).then((res: any) => {
          console.log(res);
          commit('setTopics', res.data);
          commit('setFetchIng', false);
      });
    }
  },
  getters: {
    categories: state => state.categories,
    topics: state => state.topics
  }
});
