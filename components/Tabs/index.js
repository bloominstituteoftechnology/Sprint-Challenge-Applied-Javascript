// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    //console.log(response)
    response.data.topics.forEach(item => {
        const newTopic = newTab(item);
        creation.append(newTopic)
    })
})
.catch(error => {
    console.log('Oh no!', error)
})

//component
function newTab(){
    const tab = document.createElement('div')

//class
tab.classList.add('tab')

//text content
// tab.textContent = "Content Here"

return tab
}

const creation = document.querySelector('.topics')