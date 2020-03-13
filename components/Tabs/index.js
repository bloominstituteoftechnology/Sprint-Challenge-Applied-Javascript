// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topicDivHolder = document.querySelector("div.topics")

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        // deal with the response data in here
        console.log(response)
        response.data.topics.forEach(topic => {
            const topicDiv = document.createElement("div")
            topicDiv.textContent = topic
            topicDiv.classList.add("tab") 
            topicDivHolder.append(topicDiv)  
        })
        
    })
    .catch( err => {
        // deal with the error in here
        console.log("There's an error", err)
    })

/*
const myobj = 
{"topics":["javascript","bootstrap","technology","jquery","node.js"]}
//data structure

topics = myobj => {
    const topicDiv = document.createElement("div")
    topicDiv.classList.add("tab")    
}
//function to create my element

let topicsList = myobj.data.topics.forEach(topic => topics(topic))
//looping over each topic in the data structure not sure if this needs to be in the function

let topicDivHolder = document.querySelector("div.tabs")
topicsList.forEach(topic => topicDivHolder.appendChild(topic))

//supposed to iterate over topics and put it on the page.

//i think i also need to set the text someplace
*/