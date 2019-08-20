// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const tab = document.querySelector(".tab");

const createTabs = (tab) => {
  const tabs = document.createElement("div");
  tabs.classList.add("tab");
  tabs.textContent = tab;
  //"tab" whatever the argument I pass in is

  return tabs;
};

const container = document.querySelector('.topics')//variable for the container or div

axios
  .get(" https://lambda-times-backend.herokuapp.com/topics")
  .then(response => { //always response
      const topicsArray = response.data.topics; //creating a variable to contain what we get back from url
      topicsArray.forEach(tab => {
        container.appendChild(createTabs(tab))
        // for each to run through each variable and then append that to the container
        console.log(tab);
      })
    })
    .catch(error => {
    console.log("Network request was unsuccessful");
    console.log(error);
  });
