<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-primary mb-0 mt-2">$0.0089</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Per Mega Lode</div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-danger mb-0 mt-2">$51,840.00</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Monthly Mint</div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-moon-o bg-info p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-info mb-0 mt-2">+4.528%</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Profit Forecast</div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-laptop bg-warning p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-warning mb-0 mt-2">$1,125,912.45</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Market Cap</div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
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
