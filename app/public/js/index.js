const person = {
    data() {
        return {
            result: {
                name: {
                    first: {},
                    last: {},
                },
                location: {},
                dob: {
                    date: {},
                    age: {},
                },
                email: {},
                picture: {
                    large: ""
                },
            },
            // list: [5,6,7,8],
            message: "Waiting ..."
        }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMMM YYYY')
        }
    },
    methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then((json) => {
                    // print statment viewed in inspect 
                    console.log("Got json back:", json);
                    this.result = json.results[0];
                    console.log("C");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
    created() {
        this.fetchUserData();
    }

}

Vue.createApp(person).mount('#random');
