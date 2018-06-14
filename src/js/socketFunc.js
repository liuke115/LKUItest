import io from 'socket.io-client'
import showMsg from './showMsg'

let socketFunc = {
        socketConnect: (url,token) => {
                let ioConfig = url
                return io(ioConfig)
        },
        socketConnected: (that,socket) => {
                socket.on('connect', () => {
                    showMsg.showSocketStatus(that,'socketInfo','连接成功！')
                })
                socket.on('disconnect', (reason) => {
                    showMsg.showSocketStatus(that,'socketInfo',reason)
                })
                // socket.on('connect_error', (error) => {
                //         console.log(error)
                // })
                // socket.on('error', (error) => {
                //         console.log(error)
                // })
        },
        socketDisconnect: (socket) => {
                socket.disconnect()
        },
        socketMsg: (that,socket,msgName) => {
                socket.on(msgName,(msg) => {
                    showMsg.showMsg(that,msg.username,msg.message)
                })
        }

}

export {socketFunc as default}
