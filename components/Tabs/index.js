// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')


let tops = document.querySelector('.topics')
let mainTabs = document.querySelector('.tabs')

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    
       createTabs(response.data.topics)
       
    })

  .catch(error => {
	  console.log('the data was not returned', error);
  });

function createTabs(arr) {

arr.forEach(element => {
     
  let newT = document.createElement('div')
  newT.classList.add('tab')
  newT.textContent = element;
  tops.appendChild(newT)
  

});

  return newT;
}

