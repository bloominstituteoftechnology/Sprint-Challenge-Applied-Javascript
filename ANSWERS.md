### Questions:
1. What is the DOM?
The full name for the DOM is the Document Object Model. The DOM is created from the HTML of the webpage and is stored in a tree structure that allows us to access and manipulate parts of the DOM as we like that are immediately displayed on the webpage. We never directly edit the HTML file that is loaded, we edit the Javascript DOM object and that's how our changes are displayed on the screen.

2. What is an event?
An event is an interaction we're having with an HTML element. Some types of events are 'click', 'mouseover', 'mouseenter', 'mouseup', 'wheel' etc. There is a full list of events that can be found on MDN and other sites. Events can notify of things such as basic user interactions or alerts of things happening. 

3. What is an event listener?
An event listener is a function that handles an a specified event. As the event is detected you can call a function to run a specified action as a result of the event detection.

4. Why would we convert a NodeList into an Array?
A NodeList is an "Array Like" container but is not an Array. In my limited experience and up to this point my understanding of doing this would be to be able to perform array functions on a list of items which NodeList is not able to perform as it is missing critical Array functions. One example of this is to map over an Array of items and as we map over those items we could create custom instances of classes which contain logic we've defined and then return those custom objects back into an Array. 

5. What is a component? 
