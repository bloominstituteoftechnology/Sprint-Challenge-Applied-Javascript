// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let allTopics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((resolve) => {
    resolve.data.topics.forEach(data => {
    let tabs = tab(data)
    allTopics.appendChild(tabs);
    })   
    // console.log('resolve',resolve)
});

function tab(topic){
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    allTopics.appendChild(tab);
    tab.dataset.tab = topic
    // console.log(tab)
    tab.addEventListener('click', () => {
        let card = document.querySelectorAll('.card'); 
        card.forEach((cards) => {
            // cards.style.display = 'none'
            // if(cards.dataset.tab == tab.dataset.tab){
            //     cards.style.display = 'flex'
            // }
        })
        let allTabs = document.querySelectorAll('.tab');
        allTabs.forEach((tabs) => {
            tabs.classList.remove('active-tab');
            tab.classList.add('active-tab');
        })
    })
        return tab;
}
