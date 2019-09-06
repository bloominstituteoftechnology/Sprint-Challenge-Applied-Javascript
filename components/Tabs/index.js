// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const axios = require('axios');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(resp => { function createTab(){

        const divTab = document.createElement(divTab)
        divTab.setAttribute('class', 'tab')
        divTab.textContent = 'javascript'
        
        const divTab2 = document.createElement(divTab2)
        divTab2.setAttribute('class', 'tab')
        divTab2.textContent = 'bootstrap'
        
        const divTab3 = document.createElement(divTab3)
        divTab3.setAttribute('class', 'tab')
        divTab3.textContent = 'technology'
        
        const divTab4 = document.createElement(divTab4)
        divTab4.setAttribute('class', 'tab')
        divTab4.textContent = 'jquery`'
        
        const divTab5 = document.createElement(divTab5)
        divTab5.setAttribute('class', 'tab')
        divTab5.textContent = 'node.js'
        
        divTab.appendChild(divTab2)
        divTab.appendChild(divTab3)
        divTab.appendChild(divTab4)
        divTab.appendChild(divTab5)
        return divTab
    }

    console.log(createTab())
    const tabs = createTab()
    const tabs1 = document.querySelector('.topics')
    tabs1.appendChild(createTab)

    console.log(resp.data)
})


//"javascript", "bootstrap", "technology", "jquery", "node.js"