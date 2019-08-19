<template>
    <div class="animated fadeIn">
        <b-form-group>
            <b-input-group>
                <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                </b-input-group-prepend>

                <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
        </b-form-group>

        <b-card-body>
            <p class="card-text">
                {{ showLatest }}
            </p>
        </b-card-body>

        <b-form-group>
            <b-input-group>
                <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
                <b-input-group-append><b-input-group-text><i class="fa fa-envelope-o"></i></b-input-group-text></b-input-group-append>
            </b-input-group>
        </b-form-group>

        <b-form-group>
            <b-input-group>
                <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-euro"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="text" placeholder="ex. $1.000.000"></b-form-input>
                <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
            </b-input-group>
        </b-form-group>
    </div>
</template>

<script>
/* Import local libraries. */
const utils = require('@/_utils')

export default {
    data: () => ({

    }),
    computed: {
        showLatest () {
            return this.$store.state.reports[this.$store.state.reports.length - 1]
        }
    },
    methods: {
        init () {
            /* Set WebSocket. */
            const ws = this.$store.state.ws

            /* Set action. */
            const action = 'subscribe'

            /* Set tag. */
            const tag = this.$route.params.id

            /* Build package. */
            const pkg = { action, tag }

            /* Validate ready state. */
            if (ws.readyState === 1) { // SockJS.OPEN
                /* Send package to server. */
                ws.send(JSON.stringify(pkg))
            } else {
                console.error(`Oops! WebSocket connection is NOT READY. Current state is [ ${ws.readyState} ]`)

                /* Attempt re-connection. */
                utils.reconnect(this.init, 1000)
            }
        }
    },
    mounted: async function () {
        /* Initialize. */
        this.init()
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
