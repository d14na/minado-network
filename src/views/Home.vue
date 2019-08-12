<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="6" lg="3">
                <b-card no-body class="bg-primary">
                    <b-card-body class="pb-0">
                        <b-dropdown class="float-right" variant="transparent p-0" right>
                            <template slot="button-content">
                                <i class="icon-settings"></i>
                            </template>
                            <b-dropdown-item>Last 24 hours</b-dropdown-item>
                            <b-dropdown-item>Last 7 days</b-dropdown-item>
                            <b-dropdown-item>Last 30 days</b-dropdown-item>
                        </b-dropdown>
                        <h4 class="mb-0">$1.65 <small>(+2.4%)</small></h4>
                        <p>Earnings last 24 hours</p>
                    </b-card-body>
                    <card-bar-chart-example chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" height="70"/>
                </b-card>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card no-body class="bg-info">
                    <b-card-body class="pb-0">
                        <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                            <template slot="button-content">
                                <i class="icon-location-pin"></i>
                            </template>
                            <b-dropdown-item>Show ALL ministo</b-dropdown-item>
                            <b-dropdown-item>Show SOLO ministo</b-dropdown-item>
                            <b-dropdown-item>Show POOL ministo</b-dropdown-item>
                        </b-dropdown>
                        <h4 class="mb-0">2.42Mh/s <small>[ 1 | 4 ]</small></h4>
                        <p>Ministo network activity</p>
                    </b-card-body>
                    <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
                </b-card>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card no-body class="bg-warning">
                    <b-card-body class="pb-0">
                        <b-dropdown class="float-right" variant="transparent p-0" right>
                            <template slot="button-content">
                                <i class="icon-settings"></i>
                            </template>
                            <b-dropdown-item>Show All</b-dropdown-item>
                            <b-dropdown-item disabled>Show History</b-dropdown-item>
                        </b-dropdown>
                        <h4 class="mb-0">10 <small>(+8.92%)</small></h4>
                        <p>New Mineables</p>
                    </b-card-body>
                    <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
                </b-card>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card no-body class="bg-danger">
                    <b-card-body class="pb-0">
                        <b-dropdown class="float-right" variant="transparent p-0" right>
                            <template slot="button-content">
                                <i class="icon-settings"></i>
                            </template>
                            <b-dropdown-item>Forge New Stones</b-dropdown-item>
                            <b-dropdown-item disabled>Claim Well Gifts</b-dropdown-item>
                        </b-dropdown>
                        <h4 class="mb-0">2.6739</h4>
                        <p>Forged InfinityStones</p>
                    </b-card-body>
                    <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
                </b-card>
            </b-col>
        </b-row>

        <Stats />
    </div>
</template>

<script>
/* Import components. */
import Stats from './home/Stats.vue'

import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'

import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
    name: 'dashboard',
    components: {
        Stats,

        Callout,
        CardLine1ChartExample,
        CardLine2ChartExample,
        CardLine3ChartExample,
        CardBarChartExample,
        SocialBoxChartExample,
        CalloutChartExample
    },
    data: function () {
        return {
        }
    },
    methods: {
        //
    },
    mounted: async function () {
        //
    }
}
</script>

<style>
/* IE fix */
#card-chart-01, #card-chart-02 {
    width: 100% !important;
}
</style>
