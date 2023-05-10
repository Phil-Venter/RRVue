const app = Vue.createApp({
    data() {
        return {
            taskInput: '',
            taskList: [],
            taskListStatus: true,
        };
    },
    computed: {
        buttonText() {
            return (this.taskListStatus ? 'Hide' : 'Show') + ' List';
        }
    },
    methods: {
        addTask() {
            if (!this.taskInput.trim().length) {
                return;
            }

            this.taskList.push(this.taskInput);
            this.taskInput = '';
        },

        toggleTaskList() {
            this.taskListStatus = !this.taskListStatus;
        },
    }
});

app.mount('#assignment');