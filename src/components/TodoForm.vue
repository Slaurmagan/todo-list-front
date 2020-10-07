<template>
   <div class="row">
    <form class="col s6 offset-s3" @submit.prevent="submitHandler">
      <div class="row">
        <div class="input-field col s12 ">
          <input id="todo" type="text" class="validate" v-model="title" minlength="15">
          <label for="todo">Todo</label>
          <span class="helper-text" data-error="wrong" data-success="right"></span>
          <button type="submit" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'TodoForm',
  data() {
    return {
        title: ""
    }
  },
  methods: {
    submitHandler() {
      axios.post('http://localhost:3000/todos', { title: this.title}, {
            headers: {
              'Authorization': `JWT ${window.localStorage.getItem('token')}`
            }
          }).then(r => {
            this.title = ""
            console.log(r.data)
            this.$store.commit('addTodo',r.data)
          })
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>