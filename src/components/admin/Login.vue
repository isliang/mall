<template>
    <div class="login">
        <input type="text" v-model="loginForm.username" placeholder="用户名"/>
        <input type="text" v-model="loginForm.password" placeholder="密码"/>
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
                this.axios({
                    method: 'post',
                    url: '/admin/user/login',
                    data: _this.loginForm
                }).then(res => {
                    console.log(res.data);
                    _this.userToken = 'Bearer ' + res.data.data.body.token;
                    // 将用户token保存到vuex中
                    _this.changeLogin({ Authorization: _this.userToken });
                    _this.$router.push('/home');
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