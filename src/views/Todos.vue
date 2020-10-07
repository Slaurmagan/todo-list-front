<template>
  <div>
    <h1>Todos</h1>
    <TodoForm></TodoForm>
    <div class="preloader-wrapper big active" v-if="!loaded">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div v-if="error">
      <h3>Please reload page.Smth goes wrong</h3>
    </div>
    <div class="todos">
      <Todo v-for="todo in allTodos" :key="todo.id" :todo="todo"></Todo> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import TodoForm from '@/components/TodoForm.vue'
import Todo from '@/components/Todo.vue'

export default {
  name: 'Home',
  data() {
    return {
      loaded: false,
      error: false
    }
  },
  components: {
    TodoForm,
    Todo
  },
  computed: {
    allTodos() {
      return this.$store.getters.allTodos
    }
  },
  mounted() {
    axios.get('http://localhost:3000/todos', {
        headers: {
          'Authorization': `JWT ${window.localStorage.getItem('token')}`
        }
      }).then(r => {
        this.$store.commit('setTodos',r.data)
      }).catch(error => {
        this.error = true
      })
    this.loaded = true

  }
}
</script>
<style lang="scss" scoped>
  .todos{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
