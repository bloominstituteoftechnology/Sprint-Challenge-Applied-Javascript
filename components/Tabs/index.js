// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

function topicTab(someTopic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = someTopic;

  return tab;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    // handle success
    response.data.topics.forEach((item, i) => {
      let newTab = topicTab(item);
      topics.appendChild(newTab);
    });

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
