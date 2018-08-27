### Questions:
1. What is the DOM?

the dom stands for Document Object Model. It is an object representation of the
html elements of the webpage. These elements are represented by nodes and displayed in
a tree like format. We can use the dom to change content and behavior of the dom nodes
on the webpage. Some of these node properties are informational while others 
are methods that we can use for interaction. The tree structure for what the dom is build on 
has child nodes for each branch linkd of like leaves. and parent nodes like man branches.
Each branch of the dom could be considered its own tree.

2. What is an event?

A user can interact with the HTML on a webpage and change the current content through whats called events. A simple event is the click event. Such as when a user clicks on a button. The event itself is a click event. However, there are more than just click events. An event a be triggerd when a user carriers his or her mouse over a particular item or when they have his or her mouse leave that content. Other examples of events are when a page loads, resizing a window, or right clicking on a part of the page. Normaly these events are set up to change the HTML content of the page in some way. 

3. What is an event listener?

An event listner is a procedure or function that waits for an event to happen. A listner is infact a block of code that is meant to execute when the event it was listening for occures. For example we can use javascript .addEventListner to add an event listener to a particular dom element. When can pass in the particular event that it is listening for click, mouseover, so on and then we can give it instructions for what to do when that event is triggered. 

4. Why would we convert a NodeList into an Array?

NodeList and HTMLCollection are collections of DOM nodes. The difference is that while a NodeList can contain any node type, the HTMLCollection is going to only to contain any node Element.

HTMLCollections or NodeLists are both array-like objects. They bot have numerical zero-based
indices, and the length property. Nodelist has a few methods including .forEach. However, NodeList does not have access to .reduce or .map or the other array methods.

to convert a NodeList to any array so we can have access to its methods we would have to use

Array.from(arrayLikeObject)

When we want to have access to all the array methods on an array like object thats when we would want to convert a Nodelist to an array. Also, if we wanted more array like functionality. 

5. What is a component? 

when we apply class structure to our javascript for passing in dom elements that is called a component. We can use components to pass in arrays of dom elements to manipulate their content and add functionality such as methods. We can also use data attributes to further manipulate and assign new information. We can also expand upon this by adding additional classes and having them interact with one another making our code more modular.  










