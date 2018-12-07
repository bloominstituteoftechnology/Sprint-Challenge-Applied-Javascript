# Questions

# 1. What is the DOM?

DOM stands for "Document Object Model". As its name suggests, it is a concept wherein the HTML elements of a web page are represented as objects in a tree structure. Thus, every element is essentially a node inside the DOM, each having its own properties. To dissect the term "DOM" even further:

## D (Document)
The HTML document used for the web page

## O (Object)
The HTML elements (represented as objects) that make up the document

## M (Model)
Refers to how the document is like a tree (model) filled with leaves (HTML elements / objects)

# 2. What is an event?

An event is an action that the user takes to interact with a web page. There are various type of these, such as click, key presses, scrolling or even just loading the page.

In the context of the DOM, every time an event occurs, the DOM creates a corresponding event object. This event object has various properties that hold information about the event, and it can be manipulated in code.

# 3. What is an event listener?

An event listener is a function attached to an element (or even the window or the document itself) that is used to wait for a certain type of event to occur on that element (i.e. it 'listens' for any incoming instances of a type of events). For example, it may check whether a user has clicked on a button ('listening' for a "click" event).

In the context of the DOM, an event listener waits for a particular type of event object to be detected, and then executes a function once that event object is received.

# 4. Why would we convert a NodeList into an Array?

A NodeList is an array-like object, but it doesn't have all the methods of an array. 

For the sake of convenience, if we can afford to use extra resources, we can turn it into an array and gain access to all the methods of the Array prototype, saving time and thinking power instead of coding these functionalities from scratch.

# 5. What is a component? 

A component is a reusable section of code that can be used to repeatedly build or manipulate elements with the same structure, styling and functionality.

An example would be a "dim screen" button. You can place this button (which is a component) on a page many times, and it should both look and work the same way every time it is added to the page.