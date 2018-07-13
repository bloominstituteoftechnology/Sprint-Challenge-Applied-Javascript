### Questions:
1. What is the DOM?
- The Document Object Model. Everything on the internet is an object! Including the page you find yourself on at any given moment. It is an API for HTML, allowing changes to be made to both the HTML and CSS. Ultimately, it is what ties HTML, CSS and Javascript together into one awesome internet experience. The DOM ultimately builds a tree of nodes out to keep track of all the elements and allow for interaction with said elements/nodes. 

2. What is an event?
- An event is something that occurs when action is taken upon an event oriented object. adEventListener, for instance, has methods that allow a property/method of an object to invoke an event upon interaction with either the user or another element on the page. 

3. What is an event listener?
- An event listener quite literally waits/listens for a given function/method within its own node structure and can execute a function upon interaction with either a user or another element on the page. 

4. Why would we convert a NodeList into an Array?
-One cannot iterate over a NodeList as one can over an Array. Therefore, it can be useful to convert the NodeList, using an object.method, like Array.from(), to an Array to then allow a developer to use array methods on that newly converted array, such as .map, .forEach, .reduce, etc . . .

5. What is a component? 
- A component is a structure in the DOM, created by the developer, that acts a manner to create reusable, custom elements, with their functionality remaining seperate from the remainder of the page's code. 
