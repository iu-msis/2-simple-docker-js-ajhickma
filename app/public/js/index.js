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
    created() {

        //Method 1:
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((json) => {
            // print statment viewed in inspect 
            console.log("Got json back:", json);
            this.result = json.results[0];
            console.log("C");
        })
        .catch( (error) => {
            console.error(error);
        });

        console.log("B");
        /*
            .then(response => response.json())
        Is the same as
            .then(function(response) {return response.json()})
        */


        //Method 2:
        // const response = await fetch("https://randomuser.me/api/");
        // const responseJson = await response.json();

        // console.log("Two:", responseJson);
        // this.message = responseJson.results[0].name;
        // this.result = responseJson.results[0];
        
    }

  }
  
  Vue.createApp(person).mount('#random');
