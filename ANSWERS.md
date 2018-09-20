### Questions:
1. What is the DOM? <br>
The DOM is the Document Object Model, which represents the elements of an HTML (or XML) document as an object. It is an API, which allows us to interface with and manipulate the document elements and styling. The document representation relies on a Tree data structure that has branching nodes to correspond to levels of nesting in the source document.
<br><br>

2. What is an event? <br>
An event refers to any of a given set of interactions that can occur on a webpage (such as 'scroll', 'click', or 'keydown'). Often, these interactions are inputs from the user, but they could also be from the server (e.g. 'load'). Events can be used as triggers to run code (see next question).
<br><br>

3. What is an event listener? <br>
An event listener can be applied to a document element via the method .addEventListener(). This method will accept an event (e.g. 'click') as its first argument. The second argument will be the event handler, which is the callback function that runs when the event is triggered. This callback function could be simple (like console.log) or quite complex.
<br><br>

4. Why would we convert a NodeList into an Array? <br>
A NodeList is an array-like object, but not an array. This means that the methods it has access to are limited; this was likely done on purpose to conserve memory. By using Array.from(), we can turn a NodeList into a shallow (first child layer only) Array and use array methods like map and filter. <br><br>

5. What is a component? <br>
A component is a reusable, modular bundle of HTML, CSS, and Javascript. It is meant to make large-scale programming more efficient, especially if the project involves the creation of lots of similar elements (e.g. tweets).