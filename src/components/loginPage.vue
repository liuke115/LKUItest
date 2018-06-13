<template>
    <div>
        <button @click="jumpTos">登录</button>
    </div>
</template>

<script>
    export default {
        name: "loginPage",
        data(){
            return{

            }
        },
        methods:{
            jumpTos(){
                this.$router.push({path: '/socket'})
            }
        }

    }
</script>

<style scoped>

</style>
