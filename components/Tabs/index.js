// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// topic(response).forEach(item => {

//         });
const heythere = document.querySelector('.topics')

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data.topics);
        const rabbit = response.data.topics;
        rabbit.forEach(element => {
            const cherry = topic(element);
            console.log(cherry);
            heythere.appendChild(cherry);
        });

        // response.data.message
        // const newFriend = frands(response.data);
        // entryPoint.appendChild(newFriend);

    })
    .catch(error => {
        console.log("The data was not returned", error);
    });

function topic(element) {
    const tab = document.createElement('div');
    tab.textContent = `${element}`;
    tab.classList.add('tab');
    console.log(`I'm working ${element}`)
    return tab;
}