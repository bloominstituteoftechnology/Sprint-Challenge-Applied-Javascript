# Questions

1. What is the DOM?
The DOM stands for document object model. It takes in the HTML and CSS to figure out the layout of the page, and spits out a Javascript object that has every element on the page layed out in the form of a tree. All of individual objects or "leaves" of the tree are called nodes. 

2. What is an event?
An event is an interaction that occurs while on a page. It could be anything from a click, scroll, resize, key press etc. You can write javascript that will listen for these events and will carry out a function once the event has occurred. 
3. What is an event listener?
An event listener is a function in javascript that is able to detect or "listen" for an event (such as click, key press, scroll etc.) and will then execute a function in response to that event. 

4. Why would we convert a NodeList into an Array?
A NodeList is an "array-like-object" which means it has a few properties that are similar to that of an array, but missing a few things. For example, a nodelist is a list, and can use the array method .forEach, but cannot use the methods .Filter or .map. If you needed these array methods, you would need to convert the NodeList to an array.

5. What is a component? 
A component is a combination of HTML, CSS, and javascript that together makes up one "component" of a website, and is able to stand alone. This means that a component should be able to be copied and pasted anywhere in a new project, and have it show up in the exact same way. Websites like bootstrap are full of components that people can copy and paste into their code to quickly add new components to their sites. 


