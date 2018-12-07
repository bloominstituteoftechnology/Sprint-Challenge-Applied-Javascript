# Questions

1. What is the DOM?
  DOM stands for Document Object Model. It’s a treelike structure consisting of nodes that houses the structure and content of the website. In our experience the DOM nodes hold HTML elements and content. It gives us access to change the HTML and CSS of the website through JavaScript without altering the original HTML and CSS.

2. What is an event?
  An event is a specific action the window and document registers. There are several different events. The most used are keyboard and mouse events - ie click, mouse enter, mouse leave.
  
3. What is an event listener?
  An event listener is a higher order function that is attached to an element (node). It takes in two values, the event (ie ‘click’) and a callback function. The callback function is open to our imagination. On click, you can expand content, remove content, add new content, etc.

4. Why would we convert a NodeList into an Array?
  A NodeList is an array-like object with limited methods. If you need access to all methods included on an Array object, you can use `Array.from(NodeList);`

5. What is a component?
  A component is a modularized and reusable chunk of code. It uses JS class constructors to register and add functionality to HTML structure. This technique is widely used for reusable bits of a UI, such as navigation, sidebars, or repeating cards.
