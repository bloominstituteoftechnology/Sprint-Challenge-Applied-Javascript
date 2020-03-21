// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//reference topics div
const topics = document.querySelector('.topics');

//used document fragment to optimize performance since this way it will append to the screen once instead of refreshing per item in an array. 
const topFrag = document.createDocumentFragment();

//topics content reference
const topicsMain = document.querySelector('.container-left span');



//API reference
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
   

    //create a tab for each topic and append to the DOM
    response.data.topics.forEach(topic => {
      const tab = Tab(topic);
      topFrag.appendChild(tab);
    });

    //Append fragment to DOM
    topics.appendChild(topFrag);

  })
  .catch(error => console.log(error));

//create tab component 
function Tab(title) {
  const tab = document.createElement('div');
  tab.className = 'tab';
  tab.textContent = title;
  return tab;
}