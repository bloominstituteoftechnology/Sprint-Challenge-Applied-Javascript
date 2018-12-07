# Questions

1. What is the DOM?
2. What is an event?
3. What is an event listener?
4. Why would we convert a NodeList into an Array?
5. What is a component? 


1. The DOM, or the Document Object Model, is a tree structure that represents the html elements on a webpage. The DOM is live and can be edited in the browser to display changes immediately, and running Javascript in the browser can pull information out from the DOM for debugging purposes.
2. An event is a user interaction with the web browser that creates an event object in the DOM. This can be something like a click or a scroll or a window focus. 
3. An event listener is a function that can be attached to an element in the DOM that will activate a specified callback function when the specified event occurs in the domain of that element. Through the callback function, desired functionality can be executed when an event is picked up. 
4. A NodeList is array-like but lacks the methods that the Javascript Array object has, so under some circumstances of manipulating nodelists it is preferable to have those methods available. 
5. A component is a piece of code that has been written to be reusable and self-contained that builds out an element on a webpage that will be repeatedly made on the site. This way instead of repeatedly writing code across the webpage, the component can be inserted. 