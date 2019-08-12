<template>
    <div class="animated fadeIn">
        <b-card>
            <div slot="header">
                0xBitcoin Token Toolbox
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

                    <ol>
                        <li>
                            Rewards Until Re-adjustment - 117 (~1.8 days)
                        </li>
                        <li>
                            Current Average Reward Time - 22.19 minutes
                        </li>
                        <li>
                            Tokens Minted - 4,806,900 - 0xBTC
                        </li>
                        <li>
                            Current Mining Reward - 50 0xBTC
                        </li>
                        <li>
                            Total Supply - 20,999,983.69 0xBTC
                        </li>
                        <li>
                            Token Holders - 5,572 holders
                        </li>
                    </ol>
                </b-tab>
                <b-tab>
                    <template slot="title">
                        <i class="icon-magnifier"></i>
                    </template>

                    <c-table :table-data="items" small caption="<i class='fa fa-search'></i> Block Explorer"></c-table>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'

const someData = () => shuffleArray([
  {username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active', _rowVariant: 'success'},
  {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned', _rowVariant: 'danger'},
  {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _rowVariant: 'info'},
  {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
  {username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
])

export default {
    components: {cTable},
    data: () => {
        return {
            items: someData,
            itemsArray: someData(),
            fields: [
                {key: 'username', label: 'User', sortable: true},
                {key: 'registered'},
                {key: 'role'},
                {key: 'status', sortable: true}
            ]
        }
    },
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
