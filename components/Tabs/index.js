// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let resArray = [];

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
        .then ((res) => {
            console.log('Here  is the res: ', res)
            resArray = res.data;

            res.data.message.forEach((url) => {
            entrypoint.append(placeholder(url));
        });
    })
        .catch((err) => (
            console.log('Here is the err: ', err)
        ));

// function Header(date,title,temp) {
//     let header0 = document.createElement('div');
//     let headerDate =  document.createElement('span');
//     let headerTitle = document.createElement('h1');
//     let headerTemp = document.createElement('span');
    
//      header0.classList.add('header');
//      headerDate.classList.add('date');
//      headerTemp.classList.add('temp');


//      headerDate.textContent = date;
//      headerTitle.textContent =  title;
//      headerTemp.textContent = temp;

//      header0.appendChild(headerDate);
//      header0.appendChild(headerTitle);
//      header0.appendChild(headerTemp);

//      return header0;
// };
// let headerContainer = document.querySelector('.header-container');

// headerContainer.appendChild(Header("MARCH 28, 2019","Lambda Times","98°"));
