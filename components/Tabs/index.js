// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabs (topic) {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    
    return tab;
}

const all = document.createElement('div');
all.classList.add('tab');
all.textContent = 'ALL';

const topics = document.querySelector('.topics');
topics.appendChild(all);
all.addEventListener('mouseover', (event)=>{
    all.classList.add('active-tab');
});
all.addEventListener('mouseout', (event)=>{
    all.classList.remove('active-tab');
});

// console.log(topics);
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((results) => {
        
        let data = results.data.topics;
        
        data.forEach((topic) => {
            const tab = tabs(topic);
            topics.appendChild(tab);
            
            tab.addEventListener('mouseover', (event)=>{
                tab.classList.add('active-tab');
            });
            tab.addEventListener('mouseout', (event)=>{
                tab.classList.remove('active-tab');
            });

            tab.addEventListener('click',{
                
            });
        });
        
    });