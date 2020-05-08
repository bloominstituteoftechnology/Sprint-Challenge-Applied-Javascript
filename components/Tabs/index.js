// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        
        res.data.topics.forEach(info => {
          console.log(res)  
            topicsDiv.append(tabMaker(info))
        })
    })
    .catch(error => {
        console.log('could not get request', error)
    })


const topicsDiv = document.querySelector('.topics')

function tabMaker(array){
    const tab = document.createElement('tab')
          tab.classList.add('tab')
          tab.textContent = array;
    return tab
}

