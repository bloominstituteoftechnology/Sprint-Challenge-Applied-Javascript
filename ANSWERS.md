### Questions:
1. What is the DOM?
    The DOM is the internal representation of the web page
    which exists in the browser as a tree structure with the
    HTML elements and all attributes, text, etc. as nodes in the tree.

2. What is an event?
    An event is some external occurence which the web browser can detect
    and respond to.  This includes user actions such as clicking a mouse
    or pressing a key as well as internal events such as a timer elapsing.

3. What is an event listener?
    An event listener is a process in the browser which responds to an event
    by triggering an event handler, which is a bit of Javascript code which
    then executes to react to the event in some way.

4. Why would we convert a NodeList into an Array?
    A NodeList is limited in only having a forEach method available to it.
    Converting the NodeList to an Array makes it easier to process the 
    elements in the list, as well as making it possible to convert the DOM
    elements in the NodeList into components with more functionality.

5. What is a component? 
    A component is an DOM element or group of elements which have been wrapped
    in a Javascript class to add functionality such as the ability to respond
    to events in a flexible manner.
