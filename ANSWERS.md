### Questions:
1. What is the DOM?
The DOM (Document Object Model) allows us to interface Javascript with web pages, using a logical tree structure with each branch ending in a node and each node being an object

2. What is an event?
An event is an action that happens to an HTML element that Javascript can detect and hook into, running a specified block of code

3. What is an event listener?
An event listener is a method that executes a callback upon a specified input

4. Why would we convert a NodeList into an Array?
A NodeList, while being an array-like object, is not a true array, and therefore does not have access to all of the methods on Array.prototype.  If we want to perform Array methods on a NodeList, we must first convert it.

5. What is a component?
A component is a modular block of code that allows us to build elements that share functionality and style while being DRY and readable.
