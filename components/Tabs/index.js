// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const bodyPoint = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')

    .then( (response) => {

      console.log('received info correctly', response)

      response.data.topics.forEach( (array) => {        
        
        bodyPoint.appendChild(topicTab(array))



      })      
      
    })

    .catch( (err) => {

      console.log('error')

    })

function topicTab(name){

  const tabDiv = document.createElement('div')

  tabDiv.classList.add('tab')

  tabDiv.textContent = name;

  tabDiv.addEventListener('click', (event) =>{
  	const thisHere = document.querySelector(`[data-topic='${name}']`)
  	
  	const allOtherCards = document.querySelectorAll('.card');

  	allOtherCards.forEach((ele) => {
  		ele.style.display = 'none';
  		ele.style.transition = '1s';
  	})

  	if(thisHere !== null){
  		thisHere.style.display = 'block';
  		thisHere.style.transition = '1s';	
  	}
  	
  })

  return tabDiv;

}



