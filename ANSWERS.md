### Questions:
## 1. What is the DOM?
The DOM is a giant javascript object that your browser constructs based on your CSS and HTMl.  It can be manipulated by your javascript code, thereby changing the CSS, HTML and functionality based on user input.
## 2. What is an event?
An event is when the user or browser interacts with the DOM in some way.  Examples would be the user clicking on the item, or the browser completing the loading of an element.
## 3. What is an event listener?
An event listener is code that is attached to a specific element.  When an event specified as the first parameter of the event listener occurs, the function which is passed as the second parameter is executed.
## 4. Why would we convert a NodeList into an Array?
A Node List has very limited functionality.  You can use a for loop on it, but that's about it.  IF you change it to an Array, you can use all the array methods, such as map and sort.
## 5. What is a component? 
A component is a javascript class which is placed on every element which meets specified criteria. Therefore, every item with the CSS class of ".button" could become part of the javascript class family "buttonsYouCanClick".  This turns "dumb" elements into "smart" elements, with functionality, because you can put all kinds of methods on the class which you attach to your elements.