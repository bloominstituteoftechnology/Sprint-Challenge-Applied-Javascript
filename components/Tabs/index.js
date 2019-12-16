

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTopic = document.querySelector('.topics')

function Tabs(prop){
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = prop;
    
    
    newTopic.appendChild(newTab);

};

//const nTabs=Tabs();//

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then (function(response){
        //console.log(response);
        const topicList = response.data.topics;
        //console.log(topicList);
        topicList.forEach(i => {
            const newTabs = Tabs(i);


        });


  })
  .catch(function (error) {
    //console.log(error);
  })
  .finally(function () {
  });



