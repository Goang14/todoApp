import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => {
    return state.todos
  }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    removeTodo:(state,id) => state.todos = state.todos.filter((todo) => todo.id !== id),
    updateTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
          state.todos[index]= updatedTodo;
          state.todos = [...state.todos];
        }
    },
    addTodo:(state,newTodo) => state.todos = [newTodo,...state.todos]
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://62bcff8cc5ad14c110b54ed3.mockapi.io/api/todoapp/todoApp');
    commit('setTodos', response.data);
  },
  
  async editTodo({ commit }, updatedTodo) {
    const {data} = await axios.put(`https://62bcff8cc5ad14c110b54ed3.mockapi.io/api/todoapp/todoApp/${updatedTodo.id}`, updatedTodo);
    commit('updateTodo', data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://62bcff8cc5ad14c110b54ed3.mockapi.io/api/todoapp/todoApp/${id}`);
    commit('removeTodo', id);
  },

  async addTodo({commit},model){
    const {data} = await axios.post(`https://62bcff8cc5ad14c110b54ed3.mockapi.io/api/todoapp/todoApp`, model);
    commit('addTodo',data)
},
}

export default {
  state,
  getters,
  actions,
  mutations
};