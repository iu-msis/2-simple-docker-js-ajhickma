const bookrec = {
    data() {
        return {
            books: []
        }
    },
    computed: {},
    methods: {

        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookData() {
            fetch('/api/book/book.php')
                .then(response => response.json())
                .then((response) => {
                    // print statment viewed in inspect 
                    this.books= response;
                    console.log("this.books");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
    created() {
        this.fetchBookData();
    }

}

Vue.createApp(bookrec).mount('#book');
