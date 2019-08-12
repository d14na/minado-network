<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="6" xs="12">
                <div class="brand-card">
                    <div class="brand-card-header bg-twitter">
                        <i class="fa fa-twitter"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example :data="[1, 13, 9, 17, 34, 41, 38]" />
                        </div>
                    </div>

                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">973k</div>
                            <div class="text-uppercase text-muted small">followers</div>
                        </div>
                        <div>
                            <div class="text-value">1.792</div>
                            <div class="text-uppercase text-muted small">tweets</div>
                        </div>
                    </div>
                </div>
            </b-col>

            <b-col sm="6" xs="12">
                <div class="brand-card">
                    <div class="brand-card-header bg-facebook">
                        <i class="fa fa-facebook"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" />
                        </div>
                    </div>

                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">89k</div>
                            <div class="text-uppercase text-muted small">friends</div>
                        </div>
                        <div>
                            <div class="text-value">459</div>
                            <div class="text-uppercase text-muted small">feeds</div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="6" xs="12">
                <b-card class="card-accent-danger" header="Reddit Headline">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...
                </b-card>
            </b-col>

            <b-col sm="6" xs="12">
                <b-card class="card-accent-info" header="Other Headline">
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'

export default {
    components: {
        SocialBoxChartExample
    },
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
