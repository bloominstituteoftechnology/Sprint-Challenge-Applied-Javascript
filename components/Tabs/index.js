// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then((response)=>{

    const res = response.data;
    const tabs = document.querySelector('.tabs');
    const topics = document.querySelector('.topics');
    
    res.topics.forEach(element => {

        const tab  = document.createElement('div');
        tab.classList.add('tab'); 
        tab.textContent = element;
        topics.appendChild(tab);
    });
 
  tabs.appendChild(topics);
})
.catch((err)=>{
  console.log('here is the detail for the error', err);
})
