// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// function Tab(arr){
//   const newTab = document.createElement("div");
//   newTab.setAttribute = ('class', 'tab');
//   newTab.textContent = ;

// }




axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function(response){
    // console.log(response.data.topics)
    return response.data.topics.map(crrV =>{
      const newTab = document.createElement("div");
      newTab.setAttribute('class', 'tab');
      newTab.textContent = crrV;


      const getTopicsElement = document.querySelector('.topics');
      return getTopicsElement.appendChild(newTab);
    })

  })
  // .then(function(result){
  //   console.log(result)
  // })
