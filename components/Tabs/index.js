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
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

  //////////////////////////

function lambdaTabs(data) {

  //adding elements
  const lambdaTag = document.createElement('div');

  //adding classes
  lambdaTag.classList.add('tab');

  //adding content
  lambdaTag.textContent = data;

  //add to parent

  //add event listeners

  return lambdaTag;

}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then( response => {
    response.data.topics.forEach(items => {
      const tops = lambdaTabs(items);
      entryPoint.appendChild(tops);
    });
  });

const entryPoint = document.querySelector('.topics');
