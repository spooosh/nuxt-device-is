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
                return this.device.includes('mobile');
            },

            tablet() {
                return this.device.includes('tablet');
            },

            laptop() {
                return this.device.includes('laptop');
            },

            desktop() {
                return this.device.includes('desktop');
            },

            pc() {
                return this.device.includes('desktop') || this.device.includes('laptop');
            },

            crawler() {
                return this.device.includes('crawler');
            }
        },

        methods: {
            update(str) {
                this.device = str;
            }
        },
    });
}
