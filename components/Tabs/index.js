// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function tabcreator(text){
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab') 
    tabDiv.textContent = text
    return tabDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
     .then((response)=>{
         console.log(response.data.topics)
         console.log('network request was successful')
       
         const topics = document.querySelector('.topics')
        
         const topic = response.data.topics
         topic.forEach((element) => {
             const zee =tabcreator(element)
             topics.appendChild(zee)
         });

     })

     .catch((error)=>{
         console.log(error)
     })
