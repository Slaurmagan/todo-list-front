<template>
    <div class="login">
        <h1>Login</h1>
        <span class="hints">
            <ul>
                <li v-for="hint in hints" :key="hint"> {{ hint }}</li>
            </ul>
        </span>
        <div class="row">
            <form class="col s6 offset-s3" @submit.prevent="submitHandler">
                <div class="row">
                    <div class="input-field col s8 offset-s2">
                        <input id="email" type="email" class="validate" v-model="email" minlength="5">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s8 offset-s2">
                        <input id="password" type="password" class="validate" v-model="password" minlength="3">
                        <label for="password">Password</label>
                    </div>
                </div>
                <button class="btn" type="submit">Login</button>  or <router-link tag="button" to="/auth/signup" class="btn blue lighten-2">Signup</router-link>
            </form>
        </div> 
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            hints: []
        }
    },
    methods: {
        submitHandler() {
            axios.post('http://localhost:3000/auth/login',{
                auth: {
                    email: this.email,
                    password: this.password
                }
            }).then(r => {
                console.log(r)
                if(r.data.jwt) {
                    window.localStorage.setItem('token',r.data.jwt)
                    this.$router.push('/')
                }
            }).catch(error => {
                this.hints = ['Email or password incorrect','Maybe problems on the server side']
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .login{
        text-align: center;
    }
</style>