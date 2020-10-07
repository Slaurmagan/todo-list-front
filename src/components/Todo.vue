<template>
    <div class="main">
        <div class="todo row">
            <div class="col s11 title">
                {{ todo.title }}
            </div>
            <div class="col s1">
                 <label>
                    <input type="checkbox" v-model="todo.completed" @click="toggleComplete"/>
                    <span></span>
                </label>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Todo',
    props: ["todo"],
    methods: {
        toggleComplete() {
            console.log(this.todo)
            axios.put(`http://localhost:3000/todos/${this.todo.id}`,{
                todo: {
                    ...this.todo,
                    completed: !this.todo.completed
                }
            },{
                headers: {
                    'Authorization': `JWT ${window.localStorage.getItem('token')}`
                }
            }).then(r => {

            })
        }
    }
}
</script>

<style lang="scss" scoped>
    div.main{
        width: 550px;
        height: 100px;
        & .title{
            text-align-last: left;
        }
    }
</style>

