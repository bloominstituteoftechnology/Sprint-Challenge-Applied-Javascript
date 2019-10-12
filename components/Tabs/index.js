// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>






 const topiCont = document.querySelector('.topics');



  function Tab(data){

    
        var topicItem = document.createElement('div')
        topicItem.classList.add('tab')
        topicItem.textContent = data

        return Tab;
  };

  console.log(Tab());

 
  
  axios.get('https:lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    return(response);
   
  })

  .then(function(response) {
      console.log((response.data));
  })


  .then(function(response){
      response.data.forEach((data) => {
        let tabby = Tab(response.data);
        topiCont.appendChild(tabby);
      })

  })

  .catch(function (error) {
    console.log(error);
  });