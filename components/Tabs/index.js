// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const headerB = document.querySelector('.header-container');

const createCards = () => {
    const tabs = document.createElement('div')
    tabs.classList.add('tabs')
    
    const topics = document.createElement('div')
    topics.classList.add('topics')

    const span = document.createElement('span')
    span.classList.add('title')

    hTags = [];
    for(let i = 0; i < 6; i++) {
        hTags.push(document.createElement('h2'))        
    }
    hTags[0].textContent = `Topics: `; 
    hTags[1].textContent = `Topics: `; 
    hTags[2].textContent = `Topics: `; 
    hTags[3].textContent = `Topics: `; 
    hTags[4].textContent = `Topics: `; 

    tabs.appendChild(span);
    span.appendChild(hTags);
    headerB.appendChild(tabs);
    
}
console.log(createCards);

const domElements = topics.map(attr => createCards(attr));







axios .get(' https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    console.log(response.data.message);
})
.catch((error) =>{
    console.log('Network request was unsuccessful')
    console.log(error)
})
