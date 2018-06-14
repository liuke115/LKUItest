<template>
    <div>
        <button @click="jumpTos">登录</button>
    </div>
</template>

<script>
    import socketFunc from '../js/socketFunc'
    export default {
        name: "loginPage",
        data(){
            return{
                socketTest: null
            }
        },
        mounted(){
            this.socketFuncTest()
        },
        methods:{
            jumpTos(){
                this.$router.push({path: '/socket'})
            },
            socketFuncTest(){
                console.log(socketFunc)
                socketFunc.socketConnect('http://192.168.199.231:9527','3778fe88-e71d-4004-86bc-3188f7fd450b')

                // console.log(socketFunc.socketTest2('a','b'))
                // console.log(socketFunc.socketTest3('c','d'))
            }
        }

    }
</script>

<style scoped>

</style>
