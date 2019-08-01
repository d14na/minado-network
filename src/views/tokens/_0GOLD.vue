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
                            <b-dropdown-item>Increase STAEK</b-dropdown-item>
                            <b-dropdown-item>Decrease STAEK</b-dropdown-item>
                            <b-dropdown-item disabled>Zero₵a¢he IN</b-dropdown-item>
                            <b-dropdown-item disabled>Zero₵a¢he OUT</b-dropdown-item>
                        </b-dropdown>
                        <h4 class="mb-0">10k <small>(8.92%)</small></h4>
                        <p>ZeroGold @STAEK</p>
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
        <b-col cols="12" sm="6" lg="3">
          <b-card :no-body="true" footer-class="px-3 py-2">
            <b-card-body class="p-3 clearfix">
              <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
              <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
            </b-card-body>
            <div slot="footer">
              <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" lg="3">
          <b-card :no-body="true" footer-class="px-3 py-2">
            <b-card-body class="p-3 clearfix">
              <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
              <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
            </b-card-body>
            <div slot="footer">
              <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" lg="3">
          <b-card :no-body="true" footer-class="px-3 py-2">
            <b-card-body class="p-3 clearfix">
              <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
              <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
            </b-card-body>
            <div slot="footer">
              <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" lg="3">
          <b-card :no-body="true" footer-class="px-3 py-2">
            <b-card-body class="p-3 clearfix">
              <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
              <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
            </b-card-body>
            <div slot="footer">
              <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
            </div>
          </b-card>
        </b-col>
      </b-row><!--/.row-->

      <b-row>
      <b-col xs="12" lg="6">
        <b-card>
          <div slot="header">
            Tabs with icons
          </div>
          <b-tabs>
            <b-tab active>
              <template slot="title">
                <i class="icon-calculator"></i>
              </template>
              <br> 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-basket-loaded"></i>
              </template>
              <br>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-pie-chart"></i>
              </template>
              <br>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>

      <b-col xs="12" lg="6">
        <b-card>
          <div slot="header">
            Tabs vertical
          </div>
          <b-card no-body>
          <b-tabs card pills vertical nav-wrapper-class="w-40" v-model="tabIndex[1]">
            <b-tab active>
              <template slot="title">
                <i class="icon-calculator"></i> {{tabs[0]}}
              </template>
              1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-basket-loaded"></i> {{tabs[1]}}
              </template>
              2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-pie-chart"></i> {{tabs[2]}}
              </template>
              3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </b-tab>
          </b-tabs>
          </b-card>
        </b-card>
      </b-col>
  </b-row>

        <b-row>
          <b-col md="3" sm="6">
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
          <b-col md="3" sm="6">
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
          <b-col md="3" sm="6">
            <div class="brand-card">
              <div class="brand-card-header bg-linkedin">
                <i class="fa fa-linkedin"></i>
                <div class="chart-wrapper">
                  <social-box-chart-example :data="[78, 81, 80, 45, 34, 12, 40]" />
                </div>
              </div>
              <div class="brand-card-body">
                <div>
                  <div class="text-value">500+</div>
                  <div class="text-uppercase text-muted small">contacts</div>
                </div>
                <div>
                  <div class="text-value">292</div>
                  <div class="text-uppercase text-muted small">feeds</div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="3" sm="6">
            <div class="brand-card">
              <div class="brand-card-header bg-google-plus">
                <i class="fa fa-google-plus"></i>
                <div class="chart-wrapper">
                  <social-box-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" />
                </div>
              </div>
              <div class="brand-card-body">
                <div>
                  <div class="text-value">894</div>
                  <div class="text-uppercase text-muted small">followers</div>
                </div>
                <div>
                  <div class="text-value">92</div>
                  <div class="text-uppercase text-muted small">circles</div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row><!--/.row-->
  </div>
</template>

<script>
import CardLine1ChartExample from '../dashboard/CardLine1ChartExample'
import CardLine2ChartExample from '../dashboard/CardLine2ChartExample'
import CardLine3ChartExample from '../dashboard/CardLine3ChartExample'
import CardBarChartExample from '../dashboard/CardBarChartExample'
import MainChartExample from '../dashboard/MainChartExample'
import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'
import CalloutChartExample from '../dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
    name: 'dashboard',
    components: {
        Callout,
        CardLine1ChartExample,
        CardLine2ChartExample,
        CardLine3ChartExample,
        CardBarChartExample,
        MainChartExample,
        SocialBoxChartExample,
        CalloutChartExample
    },
    data: function () {
        return {
            msg: 'Widgets',
            tabIndex: [0, 0],
            tabs: [
              'Calculator',
              'Shopping cart',
              'Charts'
            ],
            selected: 'Month',
            tableItems: [{
                avatar: { url: 'img/avatars/1.jpg', status: 'success' },
                user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
                country: { name: 'USA', flag: 'us' },
                usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
                payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
                activity: '10 sec ago'
            }, {
                avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
                user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
                country: { name: 'Brazil', flag: 'br' },
                usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
                payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
                activity: '5 minutes ago'
            }, {
                avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
                user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
                country: { name: 'India', flag: 'in' },
                usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
                payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
                activity: '1 hour ago'
            }, {
                avatar: { url: 'img/avatars/4.jpg', status: '' },
                user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
                country: { name: 'France', flag: 'fr' },
                usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
                payment: { name: 'PayPal', icon: 'fa fa-paypal' },
                activity: 'Last month'
            }, {
                avatar: { url: 'img/avatars/5.jpg', status: 'success' },
                user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
                country: { name: 'Spain', flag: 'es' },
                usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
                payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
                activity: 'Last week'
            }, {
                avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
                user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
                country: { name: 'Poland', flag: 'pl' },
                usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
                payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
                activity: 'Last week'
            }],
            tableFields: {
                avatar: {
                    label: '<i class="icon-people"></i>',
                    class: 'text-center'
                },
                user: {
                    label: 'User'
                },
                country: {
                    label: 'Country',
                    class: 'text-center'
                },
                usage: {
                    label: 'Usage'
                },
                payment: {
                    label: 'Payment method',
                    class: 'text-center'
                },
                activity: {
                    label: 'Activity'
                }
            }
        }
    },
    methods: {
        variant (value) {
            let $variant

            if (value <= 25) {
                $variant = 'info'
            } else if (value > 25 && value <= 50) {
                $variant = 'success'
            } else if (value > 50 && value <= 75) {
                $variant = 'warning'
            } else if (value > 75 && value <= 100) {
                $variant = 'danger'
            }

            return $variant
        },
        flag (value) {
            return 'flag-icon flag-icon-' + value
        }
    }
}
</script>

<style>
/* IE fix */
#card-chart-01, #card-chart-02 {
    width: 100% !important;
}
</style>
