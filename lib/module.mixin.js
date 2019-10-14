import Vue from 'vue';

export default function NuxtDeviceIsMixin() {
    return new Vue({
        data() {
            return {
                device: 'mobile'
            };
        },

        computed: {
            mobile() {
                return this.device.match('mobile');
            },

            tablet() {
                return this.device.match('tablet');
            },

            laptop() {
                return this.device.match('laptop');
            },

            desktop() {
                return this.device.match('desktop');
            },

            pc() {
                return this.device.match('desktop') || this.device.match('laptop');
            }
        },

        methods: {
            update(str) {
                this.device = str;
            }
        },
    });
}
