// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

//Version 6
//Similar to the first version...not sure if this is correct. I got the topics on the page. The style looks off, but I need to work on the other task. COma back to later, if there's time. 
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(result =>{
        // console.log(result);
        const topicsTab = result.data.topics;
        // console.log(topicsTab);
        // console.log(typeof topicsTab);
        topicsTab.forEach(item => {
            const newTab = TabComponent(item);
            topics.appendChild(newTab);
        })
        
        // const topicData = result.data;
        // console.log(topicData);
        //for loop?? for (let i = 0; i < result.data.length; i++){

        // }
    })
    .catch(err =>{
        // console.log(`You did something wrong, go back and fix it!`);
    })


//Version 5
//Too complicated....I am overthinking it. 
// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(result =>{
//         console.log(result);
//         const topicData = result.data;
//         console.log(topicData);
//     })
//     .then(result =>{
//         const tab = document.createElement('div');
           
//         //2. .textContent
//         tab.textContent = result.topics;
   
//         //3. .classList.add()
//         tab.classList.add('tabs');
   
//         //4. .appendChildren() in the axios.get(``).then
        
    
//         return tab
//     }

//     )

//Version 4 - try to hard code the array from teh information in teh console.log (like yesterday's project)
//Gets the information on the page, but incorrectly, so the appendChild is working....the forEach() is not chain promises??
// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(result =>{
//         console.log(result);
//         const topicData = result.data;
//         console.log(topicData);
//     });

// const resultData = ["javascript", "bootstrap", "technology", "jquery", "node.js"]

// resultData.forEach(item =>{
//     axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(res =>{
//         console.log(res);
//         const resData = res.data
//         const tabCard = TabComponent(resData);
//         const topics = document.querySelector('.topics');
//         topics.appendChild(tabCard);
//         // const topicData = result.data;
//         // console.log(topicData);
//     });
// });

//Version 3
// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(result =>{
//         console.log(result);
//         const topicData = result.data;
//         console.log(topicData);
//         const resultData = [];
//         topicData.forEach((item) => resultData.push(result)); 
//         console.log(resultData);
//     });

//Version 2 - it keeps saying that resultData.forEach is not a function. Do i need to push first and then use it?
// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(result =>{
//         console.log(result);
//         const resultData = result.data;
//         console.log(resultData);

//         resultData.forEach(item =>{
//             axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//             .then(info =>{
//                 console.log(info);
//             })
//         })
//     });

//Version 1
// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(result =>{
//         console.log(result);
//         const resultData = result.data;
//         console.log(resultData);
//         // resultData.forEach(function(item) {
//         //     return TabComponent(item);
//         // });
//         // Do I need two axios? One to gather the information and set the array and the other to hav a forEach and then append to the  .topics?
//         // Can I chain a forEach() with the axios inside one axios??
//         // console.log(tabArray);
//         // const tabCard = TabComponent(tabArray);
//         // const topics = document.querySelector('.topics');
//         // topics.appendChild(tabCard);
//     });


function TabComponent(array){
     //1. create elements - document.createElement()
     const tab = document.createElement('div');
           
     //2. .textContent
     tab.textContent = array;
     //only use array 

     //3. .classList.add()
     tab.classList.add('tab');

    //I don't need all these classes (below)
    //  tab.classList.add('tabs');
    //  tab.classList.add('topics');
    //  tab.classList.add('tab:hover');
    //  tab.classList.add('active-tab');
    //only use "tab"

     //4. .appendChildren() in the axios.get(``).then
    //  topics.appendChild(tab);
 
     return tab
 
}