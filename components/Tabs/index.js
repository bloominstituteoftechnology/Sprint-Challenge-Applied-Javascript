// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// Create Tap Component
const Tab = (topic) => {
   // Create Element
   const tab = document.createElement('div');

   // Element Content
   tab.textContent = topic;

   // Set Class Name
   tab.classList.add('tab');

   // Return Tab
   return tab;
};



// Get data
axios
   .get('https://lambda-times-backend.herokuapp.com/topics')
   .then(response => {
      // console.log(response);
      return response.data.topics;
   })
   
   // Create Topics Tabs
   .then(topicsArray => {
      // console.log(topicsArray);
      const topics = document.querySelector('.topics');
      topicsArray.forEach(topic => {
         newTab = Tab(topic);
         topics.appendChild(newTab);
      })
   })