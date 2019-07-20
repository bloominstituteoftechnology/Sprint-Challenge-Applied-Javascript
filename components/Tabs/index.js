// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

/* <div class="tabs">
        <div class="topics">
        <span class="title">TRENDING TOPICS:</span>
        </div>
    </div> */



    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then (data => {
        // console.log('data: ', data)
        const myInfo = data.data;
        // console.log('UserInfo: ', myInfo)
        
        const tabs = document.querySelector('.topics')
        const tab = tabCreator(myInfo)
        tabs.appendChild(tab)
        })
     
    


    //tab component 

    const tabs = document.querySelector('.topics')
    console.log(tabs)

    function tabCreator(arg) {
        //create class elements 
        const tab = document.createElement('div')

        //create class lists
        tab.classList.add('tab')

        //textcontent 
        tab.innerHTML = "All" + arg.topics

        return tab

    }