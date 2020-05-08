// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

                //start of promise to create tabs\\
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( resolve => {
//   debugger -> used to grab information from API object path
//-> https://i.imgur.com/orusXHO.png
        resolve.data.topics.forEach( element => {

            //creating tab\\
        const tab = document.createElement('div')
        tab.classList.add('tab')
        tab.textContent = element //topics here
        document.querySelector('.topics').appendChild(tab)
        //end of tab creation forEach\\
    })
})
.catch( error => {
    //adding insult to injury 
    console.log('you failure')
})
.finally( () => {
    console.log('Done')
})