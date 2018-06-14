const showMsg = {
    showSocketStatus: function (that,title,data) {
        that.$notify({
            title: title,
            message: data,
            type: 'success'
        })
    },
    showMsg: function (that,title,data) {
        that.$notify.info({
            title: title,
            message: data,
            duration: 0
        })
    }
}

export default showMsg