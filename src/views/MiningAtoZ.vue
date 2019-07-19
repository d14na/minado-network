<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="6" md="4">
                <b-card class="bg-success text-center">
                    <blockquote class="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Safe for BEGINNERS</footer>
                    </blockquote>
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card class="bg-warning text-center">
                    <blockquote class="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Recommeded for EXPERIENCED miners</footer>
                    </blockquote>
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card class="bg-danger text-center">
                    <blockquote class="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>EXPERTS ONLY</footer>
                    </blockquote>
                </b-card>
            </b-col>
        </b-row><!--/.row-->

        <b-row>
            <b-col sm="6" md="4">
                <b-card header="Card title" class="bg-warning">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card header="Card title" class="bg-danger">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <transition name="fade">
                    <b-card class="bg-secondary" no-body v-if="show">
                        <div slot="header">
                            Card with header actions
                            <div class="card-header-actions">
                                <b-link href="#" class="card-header-action btn-setting">
                                    <i class="icon-settings"></i>
                                </b-link>
                                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                                    <i class="icon-arrow-up"></i>
                                </b-link>
                                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                                    <i class="icon-close"></i>
                                </b-link>
                            </div>
                        </div>
                        <b-collapse id="collapse1" visible>
                            <b-card-body>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </transition>
            </b-col>
        </b-row><!--/.row-->
    </div>
</template>

<script>
export default {
  name: 'cards',
  data: function () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
