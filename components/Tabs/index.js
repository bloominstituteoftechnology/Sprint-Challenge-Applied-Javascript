// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

  function tabCreator(topicParam){
    let divT = document.createElement('div');
    divT.classList.add('tab');
    divT.textContent = topicParam;
    return divT;
  }

let tabTopicsElement = document.querySelector('.topics');
console.log(tabTopicsElement);

for (let i = 0; i<4; i++){

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then((response)=> tabTopicsElement.appendChild(tabCreator(response["data"]["topics"][i])))
.catch(function (error) {
        console.log(error);
      });
}