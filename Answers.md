# Questions

1. What is the DOM? 
The DOM (which stands for document object model), allows us to interface JavaScript and HTML. The DOM is a tree like structure that is made up of nodes that are nested inside each other. We can access these nodes in different ways. As Josh simply puts it, the document is just an object. Since the DOM is an API and is not JavaScript native, other languages can use it as well, because it is compatible with other languages. As a result, sometimes you have to convert to an array so that you can use methods. Another thing of note, the DOM is live and returns something back instantly to the user.

2. What is an event? 
This is the way we users are able to interact with the page. When there is some type of interaction, mouse click or double click, mouse movement, keyboard key pressed... the DOM creates an event Object. The event Object stores information about the event and can be accessed from the point of origin an at any point up the tree.

3. What is an event listener? 
We know that events are being tracked by the browser, so we can create an event listener on specific elements to listen for specific events and then fire a call back when that event occurs. 

4. Why would we convert a NodeList into an Array? 
We convert the NodeList into an array (it still maintains connection to the DOM), so that we can use methods such as .map

5. What is a component? 
It is a piece of code that we can use over and over again to build elements that share functionality and styling.
