### Questions:
1. What is the DOM?
    The DOM is the Document Object Model, which consists of a tree of objects. The DOM provides an interface that allows us to dynamically interact with and change HTML. 
2. What is an event?
    An event in JavaScript is much like an event in our world; it's an action, with specific characteristics, that has a binary ability to either take place or not take place. There are different kind of events that we can look for and identify, such as click events or keyboard events.
3. What is an event listener?
    An event listener is an object that attentively waits for a specific event to take place and has instructions about what to do in response. For example, event listeners are often given a function to execute when the event occurs.
4. Why would we convert a NodeList into an Array?
    NodeLists have access to several useful methods, such as forEach, but they do not have access to the entire collection of powerful array methods, such as map and reduce. If we want to use these array methods, we first have to convert the NodeList into an Array by using Array.from() or spreading the NodeList into an empty array like so: [...myNodeList].
5. What is a component? 
    A component consists of JavaScript, HTML, and CSS that is specially designed to be reusable for the created of repeated structural elements. Components require careful setup, but they save time and space when used to implement new repeated items.