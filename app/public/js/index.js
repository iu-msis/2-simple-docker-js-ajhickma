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
            selectedBook: null,
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
                this.fetchBookData();
              });
        },

              postEditBook(evt) {
                this.bookForm.id = this.selectedBook.id;
                       
                
                console.log("Updating!", this.bookForm);
        
                fetch('api/book/update.php', {
                    method:'POST',
                    body: JSON.stringify(this.bookForm),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                  .then( response => response.json() )
                  .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.books = json;
                    
                    this.bookForm={}
                  });
              },

              postDeleteBook(o) {
                if (!confirm("Are you sure you want to delete this book from "+o.title+"?")) {
                    return;
                }
                
                fetch('api/book/delete.php', {
                    method:'POST',
                    body: JSON.stringify(o),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                  .then( response => response.json() )
                  .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.books = json;
                    
                    this.bookForm = {}
                  });
              },
              selectBook(o) {
                this.selectedBook = o;
                 this.bookForm = Object.assign({}, this.selectedBook);
               },
               postBook(evt) {
                if (this.selectedBook === null) {
                    this.postNewBook(evt);
                } else {
                    this.postEditBook(evt);
                }
              }
        
    },
    created() {
        this.fetchUserData();
        this.fetchBookData();
    }

}

Vue.createApp(person).mount('#random');
