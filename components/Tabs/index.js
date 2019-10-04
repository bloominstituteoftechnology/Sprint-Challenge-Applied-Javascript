// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



//creating axios and iterating over it to create a new array of tabs. 

axios.get('https://lambda-times-backend.herokuapp.com/topics')
     .then((response)=>{
         console.log(response)
         console.log('I am returnung some data')

         const mainTopics = document.querySelector('.topics')

         const oneTopic = response.data.topics
         oneTopic.map((el) => {
             const article =newTabs(el)
             mainTopics.appendChild(article)
         });

     })

     .catch((error)=>{
         console.log(error)
     })


     function newTabs(item){
        const divTabs = document.createElement('div')
        divTabs.classList.add('tab') 
        divTabs.textContent = item
        return divTabs

        
    }
















