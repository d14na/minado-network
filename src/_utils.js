const reconnect = function (_func, _wait = 15000) {
    // TODO: Allow wait to grow exponentially (up to 30 seconds).
    setTimeout(() => {
        console.log('Attempting to re-connect..')

        /* Call initialization. */
        // this.initWs()
        _func()
    }, _wait)
}

module.exports = {
    reconnect
}
