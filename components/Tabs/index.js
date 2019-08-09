// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabTopic = [];

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then( (response)=> {
        // deal with the response data in here
        tabTopic.forEach(item => {
        //console.log(response.data);

        newtab(response.data)
    
        })
        console.log(response.data);

        newtab(response.data)

    })

    .catch( (err) => {
      console.log(err)
        // deal with the error in here
    })


    function newtab(data) {

// variable name

        const tab1 = document.createElement('div');
        //const topictitle = document.createElement('span');

// Structure of Elements
      
       tab1.classList.add('topics')
       tab1.textContent = data.topics;
       



// set Class Names

       tab1.classList.add('tab')
        //topictitle.classList.add()
        

       let entrypoint2 = document.querySelector('.topics')
       entrypoint2.appendChild(tab1)

     return tab1
    }


    
    