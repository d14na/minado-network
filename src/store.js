/* Import modules. */
import Vue from 'vue'
import Vuex from 'vuex'

/ Initialize Vuex. */
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* WebSocket connection. */
        ws: null,

        /* Network reports. */
        reports: []
    },
    mutations: {
        SET_WEB_SOCKET (_state, _ws) {
            /* Set WebSocket. */
            _state.ws = _ws
        },
        ADD_NETWORK_REPORT (_state, _report) {
            /* Set WebSocket. */
            _state.reports.push(_report)
        }
    },
    actions: {
        setWebSocket (_context, _ws) {
            _context.commit('SET_WEB_SOCKET', _ws)
        },
        addNetworkReport (_context, _report) {
            _context.commit('ADD_NETWORK_REPORT', _report)
        }
    }
})
