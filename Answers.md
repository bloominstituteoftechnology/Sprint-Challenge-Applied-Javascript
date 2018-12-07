# Questions

1. What is the DOM?

The Document Object Model (DOM) is an application programming interface that allows multiple programming languages to interact with the HTML, CSS, and other aspects of a web page (called “nodes”). It allows us to provide live updates to a web site and is an object-oriented representation of the web page. Since it is language agnostic, it lacks a lot of the features and specificity that would be amazing to have if it was tied to JavaScript. However, this is necessary so that other languages can manipulate the nodes of text, elements, and other DOM nodes on a web page.

2. What is an event?

An event in the DOM is a unique, predefined Event Object specified by a keyword such as “click,” “mouseover," or “scroll.” It is used inside of an event listener higher order function in order to fire a callback function that manipulates the selected DOM node upon execution.

3. What is an event listener?

An event listener, used in JavaScript as “addEventListener()”, is the higher order function (HOF) used to fire an Event Object. In that aspect, it attaches an event handler to an element to a specified DOM node; the first parameter it accepts is an Event Object that specifies when the event listener activates (i.e. “click,” etc. as mentioned above), and the second is a callback function that specifies what happens (the DOM is changes, an alert pops up, etc.).

4. Why would we convert a NodeList into an Array?

It is sometimes necessary to convert a NodeList into an array using Array.from() because the NodeList object is an array-like object that lacks many of the array methods (such as .map() and .filter()). Although NodeList has .forEach(), we may find it necessary to convert it into an Array so that we can access those methods. However, this is a costly conversion in terms of application efficiency, so we should only do it if it’s actually necessary.

5. What is a component?

A component is a group of files (CSS, HTML, JavaScript) that collectively make up an element that we might want to place on a given web page (i.e. a button, a textbox, a drop-down menu, etc.). By compartmentalizing these collect code files into a single directory (“Button,” “Dropdown,” etc.), we can then choose when to reuse the code. Furthermore, we only need to write the code once, which allows extensibility and efficiency through code reuse and DRY compartmentalization.
