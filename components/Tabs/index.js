// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: 
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function Tabs(topic) {
  // create element
  const tab = document.createElement('div');

  // add classes
  tab.classList.add('tab');

  // add content: 
  tab.textContent = topic;

  return tab;
}

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then( response => {
    // console.log(response.data.topics);
    let res = response.data.topics;
    res.forEach( item => {
      // console.log(item)
      topics.appendChild(Tabs(item));
    })
    
  })
  .catch( err => {
    console.log(err)
  })