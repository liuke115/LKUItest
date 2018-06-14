import io from 'socket.io-client'

const socket = io

let socketFunc = {
    socketConnect: function (url,token){
        let ioConfig = url + '?token=' + token
        return socket(ioConfig,{
            transports: ['websocket']
        })
    },
    socketTest: 'test',
    socketTest2: function (url,token) {
        return url + token
    },
    socketTest3: function (url,token) {
        return this.socketTest + this.socketTest2(url,token)
    }
}

export {socketFunc as default}
