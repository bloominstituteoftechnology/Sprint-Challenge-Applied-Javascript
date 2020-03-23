// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const tabCreator = (array) =>{
    const tab = document.createElement('div')

    tab.classList.add('tab');

    tab.textContent = array;

    return tab;
}



const entry = document.querySelector('.topics');
axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    /* console.log(response.data.topics); */
  const arr = response.data.topics;

    arr.forEach(item =>{
    const newCard = tabCreator(item);
    entry.append(newCard);
  })
  })
  .catch(err => {
    console.log('Something has went wrong!', err)
  });