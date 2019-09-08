// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

 


topics = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    // response.data.topics = ['javascript', 'something','something else'];
    response.data.topics.forEach ( item => {
    topics.appendChild(tabMaker(response.data.topics))
    })})   
  .catch(error => {
    console.log("The data was not returned", error)
  })

    function tabMaker(data) {
        // <div class="tabs">topic here</div>
        const 
        tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = topics;

        
       
      
    
        return tab

    }

    
   