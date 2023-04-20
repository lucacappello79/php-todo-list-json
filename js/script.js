const { createApp } = Vue;

createApp({

    data() {

        return {

            toDoList: [],
            newTask: "",

        }
    },

    methods: {

        getTask() {

            axios.get('./server.php').then(res => {
                this.toDoList = res.data;
            });
        },

        addTask() {

            let data = {
                newTask: this.newTask,
            };

            axios.post('./server.php', data, { headers: { 'Content-type': 'multipart/form-data' } }).then(res => {
                this.getTask();
            });

            this.newTask = "";

        },

        randomColor() {

            const bsColors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
            const randomIndex = Math.floor(Math.random() * bsColors.length);

            return bsColors[randomIndex];
        },

    },

    mounted() {

        this.getTask();

    },


}).mount('#app');

