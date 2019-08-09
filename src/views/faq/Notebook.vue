<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="6" md="4">
                <b-card class="bg-success text-center">
                    <h4>FOR ALL BEGINNERS</h4>
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card class="bg-warning text-center">
                    <h4>FOR EXPERIENCED MINERS</h4>
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card class="bg-danger text-center">
                    <h4>FOR EXPERTS ONLY</h4>
                </b-card>
            </b-col>
        </b-row><!--/.row-->

        <b-row>
            <b-col sm="6" md="4">
                <b-card header="Card title" class="bg-warning click" @click="openArticle('lCanDBcal2')">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card header="GPU Overclocking" class="bg-danger click" @click="openArticle('0fP5o70ub9')">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card header="FPGA Mining" class="bg-warning click" @click="openArticle('obcmXJRxy9')">
                    As with the CPU to GPU transition, the bitcoin mining world progressed up the technology food chain to the Field Programmable Gate Array. With the successful launch of the Butterfly Labs FPGA 'Single', the bitcoin mining hardware landscape gave way to specially manufactured hardware dedicated to mining bitcoins.
                    <br /><br />

                    While the FPGAs didn't enjoy a 50x - 100x increase in mining speed as was seen with the transition from CPUs to GPUs, they provided a benefit through power efficiency and ease of use. A typical 600 MH/s graphics card consumed upwards of 400w of power, whereas a typical FPGA mining device would provide a hashrate of 826 MH/s at 80w of power.
                    <br /><br />

                    That 5x improvement allowed the first large bitcoin mining farms to be constructed at an operational profit. The bitcoin mining industry was born.
                </b-card>
            </b-col>
            <b-col sm="6" md="4">
                <b-card header="Mining Difficulty" class="bg-success click" @click="openArticle('ygKqT5srpv')">
                    Token mining a block is difficult because the keccak256 hash of the generation's challenge must be lower than or equal to the target in order for the block to be accepted by the network.
                    <br /><br />

                    This problem can be simplified for explanation purposes:
                    The hash of a block must start with a certain number of zeros.
                    The probability of calculating a hash that starts with many zeros is very low, therefore many attempts must be made.
                    In order to generate a new hash each round, a nonce is incremented.
                </b-card>
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
  },
  methods: {
      // getBadge (status) {
      //     return status === 'Active' ? 'success'
      //     : status === 'Inactive' ? 'secondary'
      //     : status === 'Pending' ? 'warning'
      //     : status === 'Banned' ? 'danger' : 'primary'
      // },
      // getRowCount (items) {
      //     return items.length
      // },
      userLink (id) {
          return `notebook/${id.toString()}`
      },
      openArticle (_articleId) {
          const userLink = this.userLink(_articleId)
          this.$router.push({path: userLink})
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

.click {
    cursor: pointer;
}
</style>
