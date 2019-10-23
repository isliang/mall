<template>
    <div class="api">
        {{msg}}
        <form id="login" action="http://192.168.56.101:1701/api/admin/user/login" method="post">
            <p> <label for="name">Name</label>
                <input
                        id="name"
                        v-model="name"
                        type="text"
                        name="name"
                        placeholder="请输入用户名"
                >
            </p>
            <p> <label for="password">Password</label>
                <input
                        id="password"
                        v-model="password"
                        type="password"
                        name="password"
                        placeholder="请输入密码"
                >
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AdminLogin",
        data() {
            return {
                msg: 'need login'
            }
        },
        mounted () {
            this.axios
                .post('/api/product/detail?id=1&uid=1')
                .then(response => (this.info = response.data.data))
        }
    }
</script>

<style scoped>

</style>