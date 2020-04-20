/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function Carousel(){

    console.log('here')

    const carDiv = document.createElement('div')
    carDiv.classList.add('carousel')

    const lBtn = document.createElement('div')
    lBtn.classList.add('left-button')

    const img1 = document.createElement('img')
    img1.src = "./assets/carousel/mountains.jpeg";

    const img2 = document.createElement('img')
    img2.src = "./assets/carousel/computer.jpeg";

    const img3 = document.createElement('img')
    img3.src = "./assets/carousel/trees.jpeg";

    const img4 = document.createElement('img')
    img4.src = "./assets/carousel/turntable.jpeg";

    const rBtn = document.createElement('div')
    rBtn.classList.add('right-button')

    const carContainer = document.querySelector('.carousel-container');

    carDiv.appendChild(lBtn)
    carDiv.appendChild(img1)
    carDiv.appendChild(img2)
    carDiv.appendChild(img3)
    carDiv.appendChild(img4)
    carDiv.appendChild(rBtn)

    // animations
    img2.style.opacity = 0;
    img3.style.opacity = 0;
    img4.style.opacity = 0;

    img1.style.display = 'block';

    let index = 0;

    const imgArray = ['img1','img2','img3','img4'];

    rBtn.addEventListener('click', (event) => {
        if(index == 0){
            img1.style.transition = '0.8s';
            img1.style.opacity = 0;

            setTimeout(function(){
                img1.style.display = 'none';
                img2.style.display = 'block';
                img2.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img2.style.transition = '0.8s';
                img2.style.opacity = 1;
            },1000);
            return index += 1;
        }

        if(index == 1){
            img2.style.transition = '0.8s';
            img2.style.opacity = 0;

            setTimeout(function(){
                img2.style.display = 'none';
                img3.style.display = 'block';
                img3.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img3.style.transition = '0.8s';
                img3.style.opacity = 1;
            },1000);
            return index += 1;
        }

        if(index == 2){
            img3.style.transition = '0.8s';
            img3.style.opacity = 0;

            setTimeout(function(){
                img3.style.display = 'none';
                img4.style.display = 'block';
                img4.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img4.style.transition = '0.8s';
                img4.style.opacity = 1;
            },1000);
            return index += 1;
        }

        if(index == 3){
            img4.style.transition = '0.8s';
            img4.style.opacity = 0;

            setTimeout(function(){
                img4.style.display = 'none';
                img1.style.display = 'block';
                img1.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img1.style.transition = '0.8s';
                img1.style.opacity = 1;
            },1000);
            return index = 0;
        }
        
    });

    // left-button

    lBtn.addEventListener('click', (event) => {
        if(index == 0){
            img1.style.transition = '0.8s';
            img1.style.opacity = 0;

            setTimeout(function(){
                img1.style.display = 'none';
                img4.style.display = 'block';
                img4.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img4.style.transition = '0.8s';
                img4.style.opacity = 1;
            },1000);
            return index = 3;
        }

        if(index == 1){
            img2.style.transition = '0.8s';
            img2.style.opacity = 0;

            setTimeout(function(){
                img2.style.display = 'none';
                img1.style.display = 'block';
                img1.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img1.style.transition = '0.8s';
                img1.style.opacity = 1;
            },1000);
            return index -= 1;
        }

        if(index == 2){
            img3.style.transition = '0.8s';
            img3.style.opacity = 0;

            setTimeout(function(){
                img3.style.display = 'none';
                img2.style.display = 'block';
                img2.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img2.style.transition = '0.8s';
                img2.style.opacity = 1;
            },1000);
            return index -= 1;
        }

        if(index == 3){
            img4.style.transition = '0.8s';
            img4.style.opacity = 0;

            setTimeout(function(){
                img4.style.display = 'none';
                img3.style.display = 'block';
                img3.style.opacity = 0;
            },800);

            setTimeout(function(){
                
                img3.style.transition = '0.8s';
                img3.style.opacity = 1;
            },1000);
            return index -= 1;
        }
        
    });

    return carContainer.appendChild(carDiv)



}

Carousel()