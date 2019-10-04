// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



 //creating a new function to create the elements insde the tabs 
     

 function newTabs(item){
    const divTabs = document.createElement('div')
    divTabs.classList.add('tab') 
    divTabs.textContent = item
    return divTabs

    
}



//creating axios and iterating over it to create a new array of tabs. 

axios.get('https://lambda-times-backend.herokuapp.com/topics')
     .then((response)=>{
         console.log(response)
         console.log('I am returnung some data')

         // creating new const that will hold the '.topics' div 

         const mainTopics = document.querySelector('.topics')

         // creating new const that will grab all the data from the class .topic 

         const oneTopic = response.data.topics

         // looping though the new created const and adding the categories grabbed from the data in teh console.

         oneTopic.map((array) => {

        //adding the new tabs with the new array(stuff) in a new const(holder)
             const article =newTabs(array)

        // appending the new const with everything inside in the holder "main topic"
             mainTopics.appendChild(article)
         });

     })

     // will return an error message if the data was not received

     .catch((error)=>{
         console.log(error)
     })

















