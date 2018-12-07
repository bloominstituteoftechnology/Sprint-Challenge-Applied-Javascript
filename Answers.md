# Questions

1. What is the DOM?
The DOM is the "Document Object Model". The DOM encompasses the whole webpage.
2. What is an event?
An event is an object returned from an eventListener being triggered. For example, a 'click' event will return a mouseEvent that has specific properties for that type of event.
3. What is an event listener?
An eventListener is some attached to any element in the DOM that listens for specific 'events'. A few examples of an event are clicks, scrolling, and the window being resized. When these are triggered, they return an event that you can invoke a function based off of.
4. Why would we convert a NodeList into an Array?
A NodeList is only Array Like, and does not give you all the possible methods that an Array can possibly provide. Because of this, we use `Array.From(nodeList);` to convert a NodeList into an Array. This gives us all the Array methods available so we can use them on our elements that came from the NodeList. Before converting a NodeList into an Array, you only have the ForEach Array Method.
5. What is a component? 
A component is an Object that controls an element in the DOM. Component's are meant to be reusable, so you could make a constructor function that takes an element and turns it into said component.
