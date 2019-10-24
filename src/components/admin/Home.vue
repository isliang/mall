<template>
    <div class="home">
        hello {{username}}
        <button @click="logout">退出登录</button>
        <router-link to="/admin/product/list">product list</router-link>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: "AdminHome",
        data() {
            return {
                page_title: 'This is homepage',
                username: null
            }
        },
        mounted () {
            this.axios
                .get('/api/admin/user/login/info', {
                    params: {
                        token: this.$store.state.Authorization
                    }
                })
                .then(response => {
                    console.log(response.data);
                    this.username = response.data.data.name;
                })
                .catch(error => (this.changeLogin({ Authorization: null })))
        },
        methods: {
            ...mapMutations(['changeLogin']),
            logout() {
                this.changeLogin({ Authorization: null });
                this.$router.push('/admin/login');
            }
        }
    }
</script>

<style scoped>

</style>