### Questions:
1. What is the DOM?
    The DOM stands for Document Object Model. It represents an object-oriented version of a web page which can be modified with Javascript. HTML elements are represented as nodes or objects in the DOM with different types of interfaces for manipulation by JS. Because of this, the DOM ties all aspects of the front-end "view" portion of a website together. The hierarchy structure of HTML elements is maintained as the same hierarchy structure of DOM objects. This makes it possible to maintain state.
2. What is an event?
    An event is an action which takes place (usually) when a user interacts with the website. When some declared action takes place within the DOM an event handler is evoked on the corresponding node which is usually some function which responds to the action/input of the user.
3. What is an event listener?
    An event listener defines the type of event and it is a way to attach the event handler to a specified element. Essentially, the browser is receiving events from the operating system any time anything happens. When any of those events occur--for instance the mouse button is clicked--the browser determines if it needs to handle the event by confirming the event occurred from an element with the corresponding event listener. If so, it fires the event handler.
4. Why would we convert a NodeList into an Array?
    A NodeList does not have the necessary array methods that are needed to manipulate/access the data.
5. What is a component?
    A component is a self-contained entity within the DOM. It possesses its own interface so that its behavior can be predicted and repeated throughout the application. By using components we can create functional HTML elements that can be reused over and over while keeping the code modularized and DRY.
