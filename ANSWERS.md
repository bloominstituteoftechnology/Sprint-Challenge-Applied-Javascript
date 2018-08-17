### Questions:
1. What is the DOM?
The Document Object Model (DOM) connects web pages to scripts or programming languages. The DOM model represents a document with a logical tree.( The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.) Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

2. What is an event?
Every interaction  is known as an event and the browser can detect all of them.  When an event happens on a page it is known as a trigger. Event propagation can cause many headaches, but   if we call .stopPropagation(), it will stop our event from bubbling up the chain.

3. What is an event listener?
We can choose specific elements to listen to specific events and fires a callback when that event occurs. This is called an event listener. ‘.addEventListener’ will take two arguments, first the event to listen for, second the callback to fire when that event is triggered.


4. Why would we convert a NodeList into an Array?
NodeLists are array-like but don't feature many of the methods provided by the Array, like forEach, map, filter, etc.  JavaScript does, however, provide a very simple way to convert NodeLists to Arrays: let nodesArray = [].slice.call(document.querySelectorAll("div"));

5. What is a component? 

There are elements that are  using the same functionality and styling with minor differences.To keep our code readable, reusable, and  DRY, we can build on these repeating patterns and create components. Components are reusable pieces of code that can be used to build elements sharing functionality and styling. Components are the heart of any dynamic web application and JavaScript framework.