# Questions

1. What is the DOM?
The DOM is the Document Object Model, the structure in any HTML page that acts as a relational graph of the content in the page. 

2. What is an event?
In a general context, an event is an action or method of some kind that acts as a signaling system to run other code. It will only run to alert other code regardless of who/what is listening. In JavaScript, many built-in events are mapped to user input which help build a level of interactivity in an otherwise static webpage.

3. What is an event listener?
An event listener is a piece of code that attaches itself to a specific event and listens for when the event signals it to run.

4. Why would we convert a NodeList into an Array?
While NodeList is array-like and exposes an iterator as well as a forEach functionality, it does not possess all array methods, such as `.map`, `.filter`, and `.reduce`. Converting it to an array allows us to use array methods for its data.

5. What is a component? 
A component is an isolated template of a specific DOM object, often linked together with HTML, CSS, and JS. This allows for all component instances on a page to run the same styles and functionality.
