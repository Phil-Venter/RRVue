Vue.createApp({
    data() {
        return {
            name: 'Philip',
            age: 26,
            imgSrc: 'https://source.unsplash.com/random/300x300',
        };
    },
    methods: {
        agePlus(amount) {
            return this.age + amount;
        },
        randomNumber() {
            return Math.random();
        },
    }
}).mount('#assignment');