
### Questions:

1. What is the DOM? The DOM is a object representation of the HTML elements on a webpage. It represents the page so you can change the style and content. The object model is a tree structure with each element.

// Example code = console.log(document); //

2. What is an event? An event is every interaction a user has with the site. For example a click, moving the mouse, scrolling the page, pressing a key on the keyboard etc. When an event is triggered, it creates an object that contains information about the event.

3. What is an event listener? An event listener takes two arguments, the event to listen for and the callback to fire when that event is triggered.

// Example code = 

element.addEventListener('click', () =>{
    element.style.color = 'dodgerblue';   // Changes whatever the elements original color was to dodger blue when clicked
});

//

4. Why would we convert a NodeList into an Array? A NodeList is an Array like object, so in order to use methods like map() we need to convert the NodeList into a real Array

// Example conversion code =

Array.from(arrayLikeObject) // Creates an array from an array like object(NodeList or HTTMLCollection)

//

5. What is a component? A component is code you can reuse throughout your project that do the same thing(functionality) or have the same styling.