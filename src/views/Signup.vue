<template>
      <div class="row">
        <h1>Signup</h1>
        <ul>
            <li v-for="hint in hints" :key="hint"> {{ hint }}</li>
        </ul>
        <form class="col s6 offset-s3" @submit.prevent="handleSubmit">
            <div class="row">
                <div class="input-field col s6">
                    <input id="username" type="text" class="validate" required v-model="username">
                    <label for="username">Username</label>
                </div>
                <div class="input-field col s6">
                    <input id="email" type="email" class="validate" required v-model="email">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate" required v-model="password">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password_confirmation" type="password" class="validate" required v-model="password_confirmation">
                    <label for="password_confirmation">Confirm your password</label>
                </div>
            </div>
            <button type="submit" class="btn">Signup</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Signup',
    data() {
        return {
            hints: [],
            email: "",
            password: "",
            password_confirmation: "",
            username: "",
        }
    },
    methods: {
        handleSubmit() {
            const user = {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                username: this.username
            }
            if(password !== this.password_confirmation) {
                this.hints = ['Enter two similar passwords']
                return 
            }
            axios.post('http://localhost:3000/auth/signup',{
                user: user
            }).then(r => {
                this.$router.push('/auth/login')
            }).catch(error => {
                this.hints = ['Username should be unique','Email should be unique','There may be problems on the server side']
            })
            
        }
    }
}
</script>