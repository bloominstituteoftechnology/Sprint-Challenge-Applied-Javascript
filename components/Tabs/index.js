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
    console.log(res.data);
    const tabs = document.querySelector('.tabs');
    tabs.appendChild(lambdaTabs(res.data));
})
.catch(err => {
    console.log(err);
});

function lambdaTabs(obj) {
    const topics = document.querySelector('.topics')
    const java = document.createElement('div')
    const boot = document.createElement('div')
    const tech = document.createElement('div')
    const jQuery = document.createElement('div')
    const node = document.createElement('div')

    
    
    java.classList.add('tab')
    boot.classList.add('tab')
    tech.classList.add('tab')
    jQuery.classList.add('tab')
    node.classList.add('tab')

    topics.appendChild(java)
    topics.appendChild(boot)
    topics.appendChild(tech)
    topics.appendChild(jQuery)
    topics.appendChild(node)

    return topics

} 
