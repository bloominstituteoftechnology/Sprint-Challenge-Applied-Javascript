## Questions

##### What is the DOM?

DOM stands for Document Object Model, and it is a live representation of the HTML document. It allows multiple programming languages (including JavaScript) to access the live copy of the HTML and manipulate the style, content, and structure with methods and events.

##### What is an event?

An event can be any kind of movement, change, or manipulation of an HTML document performed by the user or certain components of the page. A user creates events such as clicks, mouse movement, typing on the keyboard, resizing the window, or scrolling. Other kinds of events include the page (or a targeted resource) loading and CSS animations firing or completing.

##### What is an event listener?

An event listener is a way to monitor the document and wait for an event or events to occur, and when they do, perform an action. The method `.addEventListerner()` is applied to the object or element (such as a button) in the document on which you're waiting for the event to occur, and then a callback function (also called the event handler) is provided to perform the desired action.

##### Why would we convert a NodeList into an Array?

The main (and likely only) reason to do this is so you can access the additional methods that the Array object has, such as `.map()` and `.filter()`. NodeList only has five methods, which is very limited compared to an Array object.

##### What is a component? 

A component is a standalone reusable piece of code, essentially made up of HTML and CSS. JavaScript is an additional and optional (though extremely powerful) part of component structure. This is extremely beneficial if you're building any kind of Web page or project - from very simple to complex - that has multiple kinds of the same element that you want to work and look the same across the project. Using components in JavaScript with HTML and CSS is done by building classes inside JavaScript, so you can process and manipulate all similar objects at once.