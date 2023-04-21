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

            // let data = {
            //     newTask: this.newTask,
            // };

            let data = {
                newTask: {
                    task: this.newTask,
                    completed: false
                }
            };


            axios.post('./server.php', data, { headers: { 'Content-type': 'multipart/form-data' } }).then(res => {
                this.getTask();
            });

            this.newTask = "";

        },

        saveTasks() {

            axios.post('./server.php', { tasks: this.toDoList }, { headers: { 'Content-type': 'application/json' } })
                .then(res => {
                    this.getTask();
                });
        },

        toggleCompleted(index) {

            this.toDoList[index].completed = !this.toDoList[index].completed;
            this.saveTasks();

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

