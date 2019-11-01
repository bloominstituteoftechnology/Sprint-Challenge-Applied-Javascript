// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let url = 'https://lambda-times-backend.herokuapp.com/topics';

function getTabData (url) {

    axios.get(url)
    .then( response => {
          let topicContent = []; 
          topicContent = response["data"]["topics"];     
          for(i in topicContent){
                CreateTabs(topicContent[i]);
          };                      
    })
     .catch( error => {
         console.log("Error:", error);
     })
};
  
function CreateTabs(tabTopic){
    let mainTabDiv = document.getElementsByClassName("topics")[0];
    let newDiv = document.createElement('div');
    newDiv.classList.add('tab'); 
    newDiv.textContent = tabTopic;
    mainTabDiv.appendChild(newDiv);

 };

getTabData(url);