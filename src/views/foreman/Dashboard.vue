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
export default {
    data: () => ({

    }),
    methods: {
        init () {
            /* Initialize primary web socket connection. */
            // this.ws = new WebSocket(MINADO_NETWORK_URL)
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
