# Questions

1. What is the DOM?
Document Object Model. It's an object with many methods that allows you to manipulate behavior of css and html using javascript. It is also language agnostic (meaning it wasn't built just for javascript).

2. What is an event?
An event is something that sits on the GUI waiting for an action to take place. An event is defined by the action it is listening for... for example:
click -> a mouse click happened
keypressed -> a key on the keyboard was pressed
These events can be used with eventListener methods to execute blocks of code in modifying the behaviors of css and html.

3. What is an event listener?
It's a method that is part of the component. It takes two arguments (event, callback). It is constantly tracking (based on which event was selected) to see when the action has occured so it can trigger the callback.

4. Why would we convert a NodeList into an Array?
Because nodelist doesn't have methods an array has (such as .map)

5. What is a component? 
A component is a copy of an element that gives the dom access to utilize methods of the dom. for example:
you can add a class to the element if you attach the dom to it with querySelector() method, and then have access to component prototypes such as classList.toggle(className).