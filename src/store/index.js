import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state,todos) {
      state.todos = todos
    },
    addTodo(state,todo) {
      state.todos.push(todo)
    }
  },
  actions: {
    
  },
  modules: {
    
  },
  getters: {
    allTodos(state) {
      return state.todos
    }
  }
})
