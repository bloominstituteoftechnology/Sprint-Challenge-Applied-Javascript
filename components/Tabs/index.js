// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response)=>{
    console.log(response)
    let tabArr = document.querySelector('.topics')
    response.data.topics.forEach(element =>{
        tabArr.appendChild(tabCreator(element))
    })
})

.catch((error)=>{
    console.log(error);
})


function tabCreator(object){
    const createTab = document.createElement("div");  
   
    createTab.textContent = object;

    createTab.classList.add('tab');

    return createTab
}



// const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics');
// console.log(axiosPromise);

// const entryPoint = document.querySelector('.topics');

// axiosPromise.then(response => {
//     console.log(response.data.message);
//     const tabArr = response.data.message;

//     tabArr.forEach(tabCreator => {
//         const newTab = createTab(tabCreator);
//         entryPoint.appendChild(newTab);
//     })
// });