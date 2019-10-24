<template>
    <div class="login">
        <input type="text" v-model="loginForm.username" placeholder="用户名"/>
        <input type="password" v-model="loginForm.password" placeholder="密码"/>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: "AdminLogin",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapMutations(['changeLogin']),
            login() {
                let _this = this;
                this.axios({
                    method: 'post',
                    url: '/api/admin/user/login',
                    data: _this.loginForm
                }).then(response => {
                    console.log(response.data.data);
                    _this.token = response.data.data.token;
                    _this.changeLogin({ Authorization: _this.token });
                    _this.$router.push('/admin/home');
                    alert('登陆成功');
                }).catch(error => {
                    alert('账号或密码错误');
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>