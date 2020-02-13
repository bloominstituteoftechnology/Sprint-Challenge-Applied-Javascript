// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

  let data = [];
  const topics = document.querySelector(".topics")
  //get request

  axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(function (res) {
      // handle success
      // console.log("response", res.data.topics);
      data = res.data.topics;
      // console.log("get request data", data)
      data.forEach((topic) => {
        Tabs(topic);
      })
    })
    .catch(function (err) {
      // handle error
      console.log(err);
    })
    .then(function () {
      // always executed
    });

    function Tabs(tabsTopic) {
      //variables

      const tab = document.createElement("div");
  
      //classes
  
      tab.classList.add("tab");
  
      //appending
      
      topics.append(tab);

      //text
  
      tab.textContent = tabsTopic;
      
      // console.log(tabsTopic)

      return tab;
  }



