const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');
let allImages = document.querySelectorAll('.carousel img');
allImages = Array.from(allImages);
leftBtn.addEventListener('click', () => 
{console.log('LEFT BTN CLICKED')
for(let i = allImages.length; i > 0; i--){
    allImages[i].style.display = 'none'
    i--;
    allImages[i].style.display = 'block'
    }
})

rightBtn.addEventListener('click', () => 
{console.log('RIGHT BTN CLICKED')
for(let i=0; i < allImages.length; i++){
    allImages[i].style.display = 'none'
    i++;
    allImages[i].style.display = 'block'
    
    
    }
})








// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
//     2. You will need to grab a reference to all of the images
//     3. Create a current index
//     4. Those buttons are gonna need some click handlers.
//     5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
//     6. Have fun!
// */