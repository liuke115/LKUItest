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
                    // this.socket = io('wss://socketio-slack-count.now.sh/socket.io/?EIO=3&transport=websocket&sid=w87hvvqIE89e_gOFJwmm')
                    this.socket = io('wss://socketio-slack-count.now.sh/')
                // this.socket = io('http://192.168.199.231:9527?token=3778fe88-e71d-4004-86bc-3188f7fd450b',{
                //     transports: ['websocket'],
                //     // interval: 60000,
                //     'connect_timeout': 90000
                // })
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
