# Sprint Challenge Applied Javascript

## Questions

1. What is the DOM?
2. What is an event?
3. What is an event listener?
4. Why would we convert a NodeList into an Array?
5. What is a component?

## Answers

1. The DOM stands for the Document Object Model and essentially represents the entire HTML structure of a given web page or application.  Thus the DOM contains all of the relative nodes, child nodes, and sibling notes of a given webpage.  The DOM also represents the idea that this structure is considered one large accessible object that can be hooked into by the ability to access nodes or groups of nodes with a programmatic language.  It just so happens the most common language that serves this function on the web is JavaScript.  So, as of current definitions, the DOM allows programmers to use JavaScript to select and create interactions with elements of the DOM, and create both content and styles that are dynamic and fluid for the end user. In reality, the DOM also represents an API that establishes the ability for the window object and HTML document to function in this manner.

2. An event is an action or occurance that occurs within a system that is programmed which the system indicates to the programmer and allows the programmer to respond in some way, if desired.  Essentially, with respect to front-end design and user experience, an event represents some interaction between the user and interface, such as a mouse event which could be a click, or mouse over, or resizing the window, or even on events that are tied to certain aspects of the DOM, such as the moment when the DOM has finished loading.

3. An event listener works in tandem with an event handler to listen for a certain event that occurs and when it detects the event occurs will cause the event handler, a function or block of code, to fire in response to the event occuring.  For example, in JavaScript you can add an event listener that will listen for a click on a certain element and then fire a function when that element is clicked by the user.