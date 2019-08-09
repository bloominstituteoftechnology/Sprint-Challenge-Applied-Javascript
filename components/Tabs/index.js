// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const test = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then( (response)=> {
        response.data.topics.forEach(item => {
      //  console.log(response.data);
   test.appendChild(newtab(item))  
    
        })
        
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
      
    

// set Class Names
    tab1.classList.add('tab')
    tab1.textContent = data   
       
        

     return tab1
    }


    
    