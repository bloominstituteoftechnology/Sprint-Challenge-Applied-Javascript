### Questions:
1. What is the DOM?

Stands for Document Object Model, it's an  Application Programming interface between HTML and Javascripts. It defines the way that a document is accesed and manipulated. By using javascript we can dynamically access and update the content, structure, and style of a document. DOM ties together all the front end portions of a website. Because of the way the DOM is structured ( the tree ) it makes everything easier to manipulate compared to just changing HTML files. In short it's basically a live version of the rendered HTML that can be modified easily through javascript.

2. What is an event?

An event is simply an action, mostly something that is refered to when a user is interacting with the website. Things like a mouse click, keystorkes, any actions that can be done with the cusor etc.. Whenever a declared action takes place in the DOM it invokes an event handler to the corresponding node because of the user action. 


3. What is an event listener?

An event listener is a function or a program that will launch once the event is triggered by the user and/or detected by the program. When any event occurs the browser decides wether or not it needs to do something about it, it needs to confirm that an event had occured from an element with the parallel event listener, if so it will fire the event handler. 


4. Why would we convert a NodeList into an Array?

A NodeList is actually a lot like an Array. A common-ground they both share is the ability use index (NodeList.item()) , length (NodeList.length), the forEach() method. We would need to convert it to an Array if we are using any Array methods because a NodeList can not use any other Array methods like map or filter. Also, an Array lets us have more flexibility with our nodes when it comes to over-all functionality also with accessing and manipulating data.  


5. What is a component? 

A component is a UI element or group of elements that have been wrapped in a JS class to add functionality as well as help us avoid repeating ourselves in the code. It can be repeated multiple times throughout the application. 
