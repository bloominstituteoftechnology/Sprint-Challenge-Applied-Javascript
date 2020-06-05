// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const myData = function(data) {
    const topics = document.querySelector(".topics")

for(let i = 0; i < data.length; i++) {

    let tab = document.createElement("div")
    tab.classList.add("tab")
    tab.textContent = data[i]
    topics.appendChild(tab)

  }
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(function (response) {
  console.log('Response: ', response.data.topics);
  const data = response.data.topics
  return data
})
.then(myData)
.catch(function (handleError) {
  console.log('Error: ', handleError);
},[])