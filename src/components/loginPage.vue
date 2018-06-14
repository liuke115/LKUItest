<template>
    <div>
        <button @click="jumpTos">登录</button>
        <button @click="linkTo">连接</button>
        <button @click="unLinkTo">断开</button>
        <el-button type="primary" plain @click="openMSG">主要按钮</el-button>
    </div>
</template>

<script>
    // import socketFunc from '../js/socketFunc'
    export default {
        name: "loginPage",
        data(){
            return{
                socket: null
            }
        },
        mounted(){

        },
        methods:{
            jumpTos(){
                this.$router.push({path: '/socket'})
            },
            socketFuncTest(){
                // socketFunc.socketConnect('http://192.168.199.231:9527','3778fe88-e71d-4004-86bc-3188f7fd450b')
                this.socket = this.$socketFunc.socketConnect('wss://socket-io-chat.now.sh','')
                this.$socketFunc.socketMsg(this,this.socket,'new message')
                this.$socketFunc.socketConnected(this,this.socket)
                // console.log(socketFunc.socketConnected(this.socket))
            },
            linkTo(){
                this.socketFuncTest()
            },
            unLinkTo(){
                this.$socketFunc.socketDisconnect(this.socket)
            },
            openMSG() {
                this.$notify.info({
                    title: '消息',
                    message: '这是一条消息的提示消息',
                    duration: 0
                });
            },

        }

    }
</script>

<style scoped>

</style>
