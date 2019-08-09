<template>
    <div class="animated fadeIn">
        <b-card>
            <div slot="header">
                <strong>Advanced</strong> Calculator
            </div>

            <b-form>
                <b-form-group
                    description="Let us know your full name."
                    label="Enter your name"
                    label-for="basicName"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Static"
                    label-for="basicStatic"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-input plaintext id="basicStatic" type="text" value="Username"></b-form-input>
                </b-form-group>

                <b-form-group
                    description="This is a help text"
                    label="Text Input"
                    label-for="basicText"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-input id="basicText" type="text" placeholder="Text"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Date" label-for="date"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-input type="date" id="date"></b-form-input>
                </b-form-group>

                <b-form-group
                    description="Please enter your email"
                    label="Email Alerts"
                    label-for="basicEmail"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-input id="basicEmail" type="email" placeholder="Enter your email" autocomplete="email"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Select"
                    label-for="basicSelect"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-select id="basicSelect"
                        :plain="true"
                        :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                        value="Please select">
                    </b-form-select>
                </b-form-group>

                <b-form-group
                    label="Radios - custom"
                    label-for="basicRadiosCustom"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-radio-group
                        id="basicRadiosCustom"
                        value="1"
                        stacked>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="1">
                            <label class="custom-control-label" for="customRadio1">Option 1</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="2" checked>
                            <label class="custom-control-label" for="customRadio2">Option 2</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" value="3">
                            <label class="custom-control-label" for="customRadio3">Option 3</label>
                        </div>
                    </b-form-radio-group>
                </b-form-group>

                <b-form-group
                    label="Checkboxes - custom"
                    label-for="basicCustomCheckboxes"
                    :label-cols="3"
                    :horizontal="true">
                    <b-form-checkbox-group stacked id="basicCustomCheckboxes">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customChk1" value="1" checked>
                            <label class="custom-control-label" for="customChk1">Option 1</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customChk2" value="2">
                            <label class="custom-control-label" for="customChk2">Option 2</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customChk3" value="3">
                            <label class="custom-control-label" for="customChk3">Option 3</label>
                        </div>
                    </b-form-checkbox-group>
                </b-form-group>

                <div slot="footer">
                    <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                    <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                </div>
            </b-form>
        </b-card>
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
