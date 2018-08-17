### Questions:
1. What is the DOM?

DOM, short for Document Object Model, is an object representation of the elements of a web page. It is structured as a tree with parent and child nodes. When the web page loads and the DOM is built developers gain
access to the "document" object, which contains the hierarchy of the entire page and a large number of built-in methods.

2. What is an event?

An event is any interaction a user has with a site. This includes a wide range of actions such as clicking, hovering, resizing the window, scrolling the page, or pressing a key, among many others. We can take
advantage of events with JavaScript to add functionality for a more feature-rich experience.

3. What is an event listener?

This is a method (addEventListener()) that allows us to wait until a certain event takes place and then react to it in some way. The method is laid out in the format .addEventListener('event', callback), where 'event'
is the particular type of event we are listening for (e.g. a click or hover) and callback is the function run when this particular event occurs.

4. Why would we convert a NodeList into an Array?

We would convert a NodeList into an array to gain access to the array methods that a NodeList does not have access to by default, most commonly .map(). While a NodeList is closer to a "true" array than HTMLCollection
since it has access to .forEach(), it has no access to any other array methods. If we want to allow access to these methods, we need to use Array.from(NodeList or other array-like object here) to convert this into an
actual array.

5. What is a component?

Similar to a class, a component is a reusable piece of code that we use to build elements that share functionality and/or styling. This allows developers to implement things like drop-down menus and tab navigation
by writing only one piece of code and then calling it for each element that is created.
