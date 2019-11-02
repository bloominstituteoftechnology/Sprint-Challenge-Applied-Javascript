// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
  //console.log(response);
    
    

    const topic = response.data;
    myTabs.appendChild(tabNew(topic));
    //console.log(topic)

        
    
    
})
.catch(error => {
  console.log("The data was not returned", error);
});

    const myTabs = document.querySelector('.topics');


    function tabNew(object){

        //define element
        const tabs = document.createElement('div');

        //structure

        //class name
        tabs.classList.add('tab');

        //text content
        tabs.textContent = `  ${object.topics}`;



        return tabs;
    }