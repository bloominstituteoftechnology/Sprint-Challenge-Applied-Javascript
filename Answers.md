# Questions

1. What is the DOM?

   The DOM is short for Document Object Model. It is an Object-Oriented representation of the HTML elements on a webpage and gives developers the power to modify it using a scripting language such as JavaScript. It's not a programming language, more of a programming interface that connects web pages to scripts so we can interact with the webpage and manipulate things like element structure, content, and styles. The elements on the page become Nodes. There are different types of nodes such as element, text, attribute, etc. But all are nested in the tree-like structure of the DOM.

2. What is an event?

   An event is literally any interaction a user has on a site from a mouse click to a wheel scroll to the pressing of any button on the keyboard. All these events are detected and tracked by the browser.

3. What is an event listener?

   An event listener tells the browser what to do when a given event is triggered on the appropriate element. The event listener is attached to the element using dot notation and provided an event string and a callback. The callback is invoked when the event is triggered.

   syntax:
   element.addEventListener('event', cb);

4. Why would we convert a NodeList into an Array?

   The main reason we convert a NodeList to an array at this point is to gain access to the .map() method. But there is a lot more we gain. A NodeList is an 'Array Like' object, meaning it looks like an array, talks like an array, but it does not act like a full-fledged array. It's like a trial offer of an array with limited functionality. But once you subscribe to the full Array, you gain unlimited access to Array methods and properties without giving up the neat structure.

5. What is a component?

   A component is an object that can be used over an over again to make similar elements of that may share similar styling, structure, event handlers, etc. This type of inheriting and passing along of properties is the heart of OOP.
