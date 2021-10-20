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
            books: [],
            bookForm: {},
            // list: [5,6,7,8],
            message: "Waiting ...",


        }
    },
    computed: {},
    methods: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchUserData() {
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then((json) => {
                    // print statment viewed in inspect
                    this.result = json.results[0];
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        fetchBookData() {
            console.log("Here!")
            fetch('/api/book/book.php')
                .then(response => response.json())
                .then((response) => {
                    // print statment viewed in inspect 
                    this.books = response;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        postNewBook(evt) {
            // this.bookForm.id = this.selectedBook.id;
            // console.log("Posting!", this.bookForm);
            // alert("Posted!");

            fetch('/api/book/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json =>{ 
                console.log("Returned from post:");
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
        }
    },
    created() {
        this.fetchUserData();
        this.fetchBookData();
    }

}

Vue.createApp(person).mount('#random');
