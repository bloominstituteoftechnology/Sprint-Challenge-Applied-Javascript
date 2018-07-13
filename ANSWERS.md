### Questions:
1. What is the DOM?

DOM stands for document object model, which is a tree that contains HTML objects. 

2. What is an event?

An event is something that happens to something within the DOM, which is also an object.

3. What is an event listener?

An event listener is when an element of the DOM can "listen" for an event, and when the event happens, execute a callback function.

4. Why would we convert a NodeList into an Array?

While we can access the NodeList elements by NodeList[x], we want it to be an array to use our array methods. When we use querySelectorAll, what we receive is a Nodelist, which we can transform into an array for easier use.

5. What is a component? 

A component is a powerful way to avoid repeat ourselves, where we can utilize a class to manipulate certain DOM elements to our liking.