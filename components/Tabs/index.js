let url = 'https://lambda-times-backend.herokuapp.com/topics';

// Function used to get tab data 
function getTabData (url) {

    // Get tab data from url
    axios.get(url)
    .then( response => {

          // Get topics  
          let topicContent = []; 
          topicContent = response["data"]["topics"];
          topicContent.unshift("all")
          console.log("topic content:", topicContent)

          // iterate through the array to create tabs
          for(i in topicContent){

                CreateTabs(topicContent[i]);

          };                 

    })
     .catch( error => {
         console.log("Error:", error); //console logs errors
     })

};

// Create function   
function CreateTabs(tabTopic){

    // query select where to append
    let tab = document.querySelector('.topics')

    // create element
    let tabs = document.createElement('div')
    
    //create class list 
    tabs.classList.add('tab')
    
    //text content
    tabs.innerText = tabTopic;

    //append child
    tab.appendChild(tabs);

 };

// gets tab data
getTabData(url);