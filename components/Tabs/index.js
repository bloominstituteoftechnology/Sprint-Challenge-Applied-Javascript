// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const tabCont = document.querySelector('.topics')

function tabMaker(arr){

  arr.forEach(data => {

const tab = document.createElement('div');

tab.classList.add('tab');

tab.textContent = data;

tabCont.appendChild(tab);

  });
}

axios
.get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then((response) => {       

    // console.log("success", response);
    tabMaker(response.data.topics);

  })
  .catch((err) => {
    
    console.log("Oops", err);

  });
 







//   function tabMaker(data){

//   const topicItem = document.createElement('div')
//   const topicHeadline = document.createElement('div');
//   const authorImgContainer = document.createElement('div');
//   const imgContainer = document.createElement('div');
//   const cardImg = document.createElement('img');
//   const cardAuthor = document.createElement('span');


//   topicItem.appendChild(topicHeadline);
//   topicItem.appendChild(cardAuthor);
//   authorImgContainer.appendChild(imgContainer);
//   authorImgContainer.appendChild(cardAuthor);
//   imgContainer.appendChild(cardImg);

//   topicItem.classList.add('card');
//   topicHeadline.classList.add('headline');
//   authorImgContainer.classList.add('author');
//   imgContainer.classList.add('img-container');

// topicHeadline.textContent = data.headline;
// cardImg.src = data.authorPhoto
// cardAuthor.textContent = data.authorName;

  

// return tabMaker;

//   };

//   axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")

//   .then(response => {
//     console.log("success", response);

//     response.data.articles.bootstrap.forEach(item => {
//       container.appendChild(tabMaker(item));
//     });

//     response.data.articles.javascript.forEach(item => {
//       container.appendChild(tabMaker(item));
//     });

//     response.data.articles.technology.forEach(item => {
//       container.appendChild(tabMaker(item));
//     });

//     response.data.articles.node.forEach(item => {
//       container.appendChild(tabMaker(item));
//     });

//     response.data.articles.jquery.forEach(item => {
//       container.appendChild(tabMaker(item));
//     });
//   })
//   .catch(error => {
//     console.log("Could not fetch data", error);
//   });

// const container = document.querySelector(".cards-container");

 
 
  
  // axios.get('https:lambda-times-backend.herokuapp.com/topics')
 

  // // .then((res) => {
  // // const data = res.data;
  // //  tabMaker(res.data);
  // // })

  // .then(function (response) {
  //   console.log(response.data);
    
  //   response.data.forEach((sub)=>{
  //       tabMaker(sub);
  //   })
   
  // })



  // .catch(function (error) {
  //   console.log(error);
  // });