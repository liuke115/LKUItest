<template>
    <div>
        <button @click="jumpTos">返回</button>
        <button @click="linkTo">连接</button>
        <button @click="unlinkTo">断开</button>
    </div>

</template>

<script>
    import io from 'socket.io-client'

    export default {
        name: "socketPage",
        data(){
            return{
                socket: null
            }
        },
        methods:{
            jumpTos(){
                this.$router.push({path: '/'})
            },
            linkTo(){
                this.socket = io('http://192.168.199.231:9527?token=3778fe88-e71d-4004-86bc-3188f7fd450b&pingInterval=60000&pingTimeout=90000',{
                    transports: ['websocket'],
                    // interval: 60000,
                    'connect_timeout': 90000
                })
                this.socketConnected()
                this.socketDisconnect()
                this.socketMsg()
            },
            unlinkTo(){
               this.socket.disconnect()
            },
            socketConnected(){
                this.socket.on('connect',function () {
                    console.log('连上了')
                })
            },
            socketDisconnect(){
                this.socket.on('disconnect',function () {
                    console.log('断开了!')
                })
            },
            socketMsg(){
                this.socket.on('msg',function (data) {
                    console.log(data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
