// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryPointTopic = document.querySelector('.tabs')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (res) {
    // handle 
    console.log(res.data);
    const pageTabs = topicsCreator(res.data);
    entryPointTopic.appendChild(pageTabs)

    // ADD NEXT 2 LINES AFTER CHECKING DATA 
    // const myTabs = topicsCreator(response.data);
    // entryPointTopic.prepend(myTabs);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });




function topicsCreator(data){
  // element  
  const tab = document.createElement("div");

  // content
  tab.textContent = data.topics; //try first need to figure out how data looks
  // const dataInArray = Object.entries(data);
  // tab.textContent = dataInArray.topics;


  // class
  tab.classList.add("tab");

  return tab;
} 