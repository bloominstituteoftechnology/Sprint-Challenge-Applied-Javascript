// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get( 'https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    response.data.topics.forEach((element) => {
        topicsDiv.appendChild(createTopics(element))
    });
  console.log(response);
})
.catch( error => {
  // console.log("the data was not returned", error)
})


function createTopics(data1) {
    const tab = document.createElement('div')
    // const ul = document.createElement('ul')
    // const topic1 = document.createElement('li')
    // const topic2 = document.createElement('li')
    // const topic3 = document.createElement('li')
    // const topic4 = document.createElement('li')
    // const topic5 = document.createElement('li')

    // tab.appendChild(ul)
    // ul.appendChild(topic1)
    // ul.appendChild(topic2)
    // ul.appendChild(topic3)
    // ul.appendChild(topic4)
    // ul.appendChild(topic5)

    tab.classList.add('tab')

    tab.textContent = `${data1}`
    

    return tab

}

const topicsDiv = document.querySelector('.topics')

