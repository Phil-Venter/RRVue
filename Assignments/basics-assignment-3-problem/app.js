Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    computed: {
        output() {
            const value = 37;

            if ( this.counter < value ) {
                return 'Not there yet.';
            }

            if ( this.counter > value) {
                return 'Too much!';
            }

            return value;
        }
    },
    watch: {
        output() {
            setTimeout(() => {
                this.counter = 0;
            }, 5000);
        }
    },
    methods: {
        add(amount) {
            this.counter = this.counter + amount;
        }
    },
}).mount('#assignment')