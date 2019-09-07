

let carouselImg = document.querySelectorAll('.carousel img');
let images = Array.from(carouselImg);
let parent = document.querySelector('.carousel');


let createBtn = (type, imgSlide) => `
<div data-goto=${type === 'left' ? imgSlide - 1 : imgSlide + 1} class="${type}-button btn">${type === 'right' ? '>' : '<'}</div>

`
let renderBtn = (currImg, numOfImgs, imgPerSlide) => {
    const slides = numOfImgs / imgPerSlide;

    let btn;
    if(currImg === 1 && slides > 1){
        // only show the next btn
        btn = createBtn('right', currImg);
    } else if (currImg < slides){
        // show both buttons
        btn = `
        ${createBtn('left', currImg)}
        ${createBtn('right', currImg)}
        
        `
    } else if (currImg === slides && slides > 1){
        btn = createBtn('left', currImg);
    }

    parent.insertAdjacentHTML('afterbegin', btn);
}


const renderImg = (img, currImg = 1, totalImgPerShow = 1) => {
    let start = (currImg - 1) * totalImgPerShow;
    let end = currImg * totalImgPerShow;
    img.slice(start, end).forEach((image) => {
        image.style.display = 'block';
        
    });
    renderBtn(currImg, img.length, totalImgPerShow);
}
renderImg(images)

parent.addEventListener('click', (e) =>{
    const btn = e.target.closest('div')
    if(btn){
        const goToImg = parseInt(btn.dataset.goto);
        renderImg(images, goToImg);
    }
 
});















// const carouselInstance = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
