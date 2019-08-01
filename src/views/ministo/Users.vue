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
                        <h4 class="mb-0">{{hashRateDisplay}} <small>[ 1 | 4 ]</small></h4>
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

        <b-row>
            <b-col cols="12">
                <transition name="slide">
                    <b-card :header="caption">
                        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
                            <template slot="id" slot-scope="data">
                                <strong>{{data.item.id}}</strong>
                            </template>
                            <template slot="name" slot-scope="data">
                                <strong>{{data.item.name}}</strong>
                            </template>
                            <template slot="status" slot-scope="data">
                                <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
                            </template>
                        </b-table>
                        <nav>
                            <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
                        </nav>
                    </b-card>
                </transition>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import usersData from './UsersData'
export default {
    name: 'Users',
    props: {
        caption: {
            type: String,
            default: 'Users'
        },
        hover: {
            type: Boolean,
            default: true
        },
        striped: {
            type: Boolean,
            default: true
        },
        bordered: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        fixed: {
            type: Boolean,
            default: false
        }
    },
    data: () => {
        return {
            items: usersData,
            hashRateDisplay: '2.42Mh/s',
            // items: usersData.filter((user) => user.id < 42),
            fields: [
                {key: 'id'},
                {key: 'name'},
                {key: 'registered'},
                {key: 'role'},
                {key: 'status'}
            ],
            currentPage: 1,
            perPage: 5,
            totalRows: 0
        }
    },
    computed: {
    },
    methods: {
        init () {
            let rate = 3.0

            setInterval(() => {
                rate += parseFloat(rate / 4.0)
                this.hashRateDisplay = `${rate.toFixed(2)}Mh/s`
            }, 5000)

        },
        getBadge (status) {
            return status === 'Active' ? 'success'
            : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
        },
        getRowCount (items) {
            return items.length
        },
        userLink (id) {
            return `tag/${id.toString()}`
        },
        rowClicked (item) {
            const userLink = this.userLink(item.id)

            this.$router.push({ path: userLink })
        }
    },
    mounted: async function () {
        /* Initialize. */
        this.init()
    }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
    cursor: pointer;
}
</style>
