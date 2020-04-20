// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
// const entry = document.querySelector(".topics")
// const Top =[];
// Top.forEach( topics => {
// axios.get(`https://lambda-times-backend.herokuapp.com/${topics}`)
// .then( response =>{
//     const newTabs = tabData(response.data)
//     entry.appendChild(newTabs)
//     console.log(response)
// })

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        response.data.topics.forEach((item) => {
            const topicA = document.getElementsByClassName('topics');
            let newTab = tabData(item);
            topicA[0].appendChild(newTab);


        });
    })
  .catch( error => {
    console.log(error);
  })

function tabData(object){
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = object
    return tab
}
