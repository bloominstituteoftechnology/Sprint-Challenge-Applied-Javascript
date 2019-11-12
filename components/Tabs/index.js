// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
  .get(' https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    console.log(response.data);
    response.data.topics.forEach(i => {
      const tabs = createTabs(i, 'topics');
      tabPoint.appendChild(tabs);
    });
  });
function createTabs(p) {
  const tabslist = document.createElement('div');
  const javaTab = document.createElement('div');
  const bootTab = document.createElement('div');
  const techTab = document.createElement('div');
  const jTab = document.createElement('div');
  const nodeTab = document.createElement('div');

  tabslist.appendChild(javaTab);
  tabslist.appendChild(bootTab);
  tabslist.appendChild(techTab);
  tabslist.appendChild(jTab);
  tabslist.appendChild(nodeTab);

  javaTab.textContent = p;
  bootTab.textContent = p;
  techTab.textContent = p;
  jTab.textContent = p;
  tabslist.textContent = p;

  tabslist.classList.add('.top-bar');
  tabslist.classList.add('tab');
  // tabslist.classList.add('top-bar');
  tabslist.classList.add('active-tab');

  return tabslist;
}
const tabPoint = document.querySelector('.topics');
// function cCreator() {}
