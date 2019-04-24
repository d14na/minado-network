<template>
    <AppHeaderDropdown right no-caret>
        <template slot="header">
            <img
                src="img/avatars/6.jpg"
                class="img-avatar" />
        </template>

        <template slot="dropdown">
            <b-dropdown-header tag="div" class="text-center">
                <strong>Account</strong>
            </b-dropdown-header>

            <b-dropdown-item>
                <i class="fa fa-user" /> Profile
            </b-dropdown-item>

            <b-dropdown-item>
                <i class="fa fa-envelope-o" /> Messages
                <b-badge variant="success">{{ itemsCount }}</b-badge>
            </b-dropdown-item>

            <b-dropdown-item>
                <i class="fa fa-lock" /> Signout
            </b-dropdown-item>

            <b-dropdown-header tag="div" class="text-center">
                <strong>Settings</strong>
            </b-dropdown-header>

            <b-dropdown-item>
                <i class="fa fa-bell-o" /> Notifications
            </b-dropdown-item>

            <b-dropdown-item>
                <i class="fa fa-usd" /> Payments
            </b-dropdown-item>
        </template>
    </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'

export default {
    name: 'DefaultHeaderDropdownAccnt',
    components: {
        AppHeaderDropdown
    },
    data: () => {
        return { itemsCount: 42 }
    }
}
</script>
