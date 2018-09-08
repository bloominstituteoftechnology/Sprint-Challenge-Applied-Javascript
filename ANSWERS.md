### Questions:
1. What is the DOM?

This Dom is an abbreviation for the "Document Object Model". It is much like a tree that consist of various nodes. Through the Javascript langauge, the Dom is able to be manipulated and create interactive pages. 

2. What is an event?
An event is essentially an action that takes place in the DOM. The event receives a signal from an event listener and then returns an action based on the event Listener's specifications. 

3. What is an event listener?
An event listener is code that provides a signal to enact an event providing that the specifications within the listener are met. A common event listener signal is "click". When a person clicks in the designated area where the event listener is "listening" for a click, it follows that by sending an action to respond to the click. In class, we have been providing event handler functions as responses to the listener. 

4. Why would we convert a NodeList into an Array?
This allows us to keep our code dry. When we access a nodeList through an array, we can delegate the information with less code and less repitition. By converting a nodelist to an array, we can use array methods that will loop through the nodeList and gather the targeted information. 

5. What is a component? 

a component is mainly code that can be reused on x amount of elements that require similar treatment for whatever objective the programmer is looking to pursue. I think of it as allowing code to by recycled for optimum usage. 