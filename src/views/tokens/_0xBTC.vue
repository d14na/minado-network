<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" md="6">
                <b-alert show variant="info">
                    <h4 class="alert-heading">Well done!</h4>
                    <p>
                        Aww yeah, you successfully read this important alert message.
                        This example text is going to run a bit longer so that you can see
                        how spacing within an alert works with this kind of content.
                    </p>
                    <hr>
                    <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </b-alert>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card class="text-white bg-danger">
                    <div class="h4 m-0">$98.111,00</div>
                    <div>Lorem ipsum...</div>
                    <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
                    <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
                </b-card>
            </b-col>
            <b-col sm="6" lg="3">
                <b-card class="text-white bg-primary">
                    <div class="h4 m-0">2 TB</div>
                    <div>Lorem ipsum...</div>
                    <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
                    <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
                </b-card>
            </b-col>
        </b-row><!--/.row-->

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
import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'
export default {
  name: 'widgets',
  components: {
    SocialBoxChartExample
  },
  data () {
    return {
      msg: 'Widgets',
      tabIndex: [0, 0],
      tabs: [
        'Calculator',
        'Shopping cart',
        'Charts'
      ]
    }
  }
}
</script>
