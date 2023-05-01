Vue.createApp({
    data() {
        return {
            keyDownText: '',
            enterText: '',
        };
    },
    methods: {
        showAlert(text) {
            alert(text);
        },
        updateKeyDownText(event) {
            this.keyDownText = event.target.value;
        },
        updateEnterText(event) {
            this.enterText = event.target.value;
        },
    },
}).mount('#assignment');