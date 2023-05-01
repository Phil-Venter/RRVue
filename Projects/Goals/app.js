function readGoalsFromStore() {
    if (localStorage.goals) {
        return JSON.parse(localStorage.goals);
    }

    return [];
}

function storeGoalToStore(goal) {
    const goals = readGoalsFromStore().concat(goal);
    localStorage.goals = JSON.stringify(goals);
}

function deleteGoalFromStore(goal) {
    const goals = readGoalsFromStore().filter(g => g !== goal);
    console.log(goal, goals);
    localStorage.goals = JSON.stringify(goals);
}

Vue.createApp({
    data() {
        return {
            goals: [],
            input: '',
            error: false,
        };
    },
    mounted() {
        this.goals = readGoalsFromStore();
    },
    methods: {
        appendGoal() {
            this.error = false;

            if (this.input.length <= 0) {
                return this.error = true;
            }

            this.goals.push(this.input);
            storeGoalToStore(this.input);

            this.input = '';
        },
        removeGoal(goal) {
            const index = this.goals.indexOf(goal);
            this.goals.splice(index, 1);

            deleteGoalFromStore(goal);
        }
    }
}).mount('#app');