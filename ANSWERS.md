### Questions:
1. What is the DOM?

> *The DOM(Document Object Model) is an Object representation of our HTML. The DOM acts as an interface by which we can manipulate the HTML elements that we see in our browser. Via the DOM, we can add new elements and change the styling of current elements. We do this manipulation using Javascript as the DOM is a javascript Object.*

2. What is an event?

> *An event is something that can occur on the DOM for which we can specify a response.  Some examples of events are: Click, Mousedown, Wheel.  For these events, we can write code that takes place whenever these events occur.(i.e whenever the events are triggered)*

3. What is an event listener?

> *An event listener is a function that is called whenever a specified event occurs for an element or elements.  It is also called an event handler.  It specifies what happens whenever an event occurs.*

4. Why would we convert a NodeList into an Array?

> *We convert a NodeList into an Array whenever we wish to make use of javascript Array methods that are not available for Nodelists.  A NodeList contains only the .forEach() array method, but does not contain .map(), .reduce(), etc.*

5. What is a component?

> *A component is an object based version of a set of HTML elements. For instance, if we have a section of HTML elements that make up a menu on our web page, we can encapsulate them into a component using javascript.  This entails creating new objects via Classes.  We can create a new Menu Object(component) for the menu section of our HTML.  This new Menu component can have properties and methods(including event listeners) that allow for easy manipulation of those HTML elements.*