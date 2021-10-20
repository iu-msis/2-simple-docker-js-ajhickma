const bookrec = {
    data() {
        return {
            
        }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        
    },
    created() {
        this.fetchBookData();
    }

}

Vue.createApp(bookrec).mount('#book');
