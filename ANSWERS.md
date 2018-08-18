### Questions:
1. What is the DOM?
2. What is an event?
3. What is an event listener?
4. Why would we convert a NodeList into an Array?
5. What is a component? 

1. The DOM is an acronym for Document Object Model. The DOM is also referred to as a tree. That is because the DOM is constructed of Nodes that are HTML elements tags and Content that spread down a tree like hierarchy. Developers target parent nodes and then their child node elements of the DOM to manipulate the HTML Content for functional and visual effect. The DOM's most upper parent is the Document object. 

2. Events are actions taken place by the user on the web browser. They are clicks, keyboard key press downs, mouse scrolling, mouse hovering over certain content, mouse clicking on content, it is drag and dropping. Pretty much any computer keyboard or mouse action taken by the user on the webpage.

3. The event listener is the bridge between the HTML DOM and Javascript. Javascript selects a HTML DOM element and stores it inside of a variable and then an addEventLisenter function is added to that variable. Where the user describes the type of action we are listening for and the function that fires off when the action is heard.

4. Nodelists are a sort of pseudo array object returned when calling a collection of HTML nodes. Though it is in array like form it does not have access to Javascript built in functions such as Map, Reducer, or Filter. It is better practice to convert any outter API object into Javascript because we want to manipulate that object using Javascript syntax and built in functions.

5. Components are reusable chunks of code kind of like larger more complex functions. They return webpage functionality that can be used over and over agian.