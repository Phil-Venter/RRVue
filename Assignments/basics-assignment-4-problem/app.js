Vue.createApp({
    data() {
        return {
            userInput: '',
            hidden: false,
            color: '#',
        };
    },
    computed: {
        className() {
            let classesToReturn = [];

            if (['user1','user2'].includes(this.userInput)) {
                classesToReturn.push(this.userInput);
            }

            if (this.hidden) {
                classesToReturn.push('hidden');
            } else {
                classesToReturn.push('visible');
            }

            return classesToReturn;
        },
    },
    methods: {
        toggleParagraph() {
            this.hidden = !this.hidden;
        },
    }
}).mount('#assignment');