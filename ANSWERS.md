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

4. Being an "array-like" object, a NodeList has some methods that are similar to methods on arrays but they are incredibly limited.  For example, NodeLists have read only methods and essentially a method for length and a much less powerful version of the iterative forEach method.  However, converting an array-like object to an array is possible with the .from() method and doing so then allows access to a much more diverse and powerful set of methods that act on arrays. Such methods as .map(), .filter(), .reduce() are notable to point out as being available to arrays and not array-like objects.  So, overally converting allows us to have a much greater set of tools at our disposal when dealing with these data types.

5. Essentially components are reusable pieces of code that can be used to build elements that have similar styles and functions.  This gives a modular approach to web design and is quite powerful since the compartmentalization of function and style not only makes the additional infusion of data into the DOM something effortless, but it also safeguards against global disasters and globally intertwined bugs.  Think about the string of bulbs at Christmas that still is lit when one bulb goes out.  The problem is localized and the entire string still functions until that module can be debugged because each light contains a localized repetitive set of all the major electronics that each needs to stay illuminated.  However, if all the lights shared some very important global aspect that was pivotal to being lit and the electronics to produce light were globally shared by all, then a localized catastrophe can easily spread and take out the entire strand because of how globally intertwinned the functionality of producing light would be.  The same sort of analogy, more or less applies to modular design and components as well.