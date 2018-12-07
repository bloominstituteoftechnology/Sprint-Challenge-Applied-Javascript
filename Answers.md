# Questions

1. What is the DOM?

The DOM is the Document Object Model, which is an object representation of the html elements of a webpage. It provides an interface with which we can interact to manipulate page, change the document structure, content and styling. It's a tree structure, where each DOM element is a node on the tree, sharing the same property keys with all other nodes. We have methods by which we may search the DOM tree, such as getElementsByClass() and querySelector(); we also have properties which allow us to traverse the DOM, such as parentNode and childNode. These allow us to move from a current node (found with selector methods) to grab the parent and child nodes, respectively.

2. What is an event?

A user may interact with a website via an input device, such as a mouse, a keyboard, etc. Any such interaction is known as an event.

3. What is an event listener?

An event listener is a method which we can bind to a node on the DOM, which will 'listen' for a specific event, such as a click or mouseover. This method takes two parameters: the event for which it is to listen, and some callback function it is to perform upon such event firing.

4. Why would we convert a NodeList into an Array?

A NodeList is an Array-like object, and has three properties that an Array does: zero-indexed elements, length property and you can invoke the .forEach() method on it. Sometimes, though, you want to use one or more of the many other properties or methods of an Array on a NodeList; in this case, you would convert NodeList to an Array.

5. What is a component?

According to the LS Training Kit, 'Components are the building block to modern application development.' Simply put, components are pre-fabbed parts of a website, made from HTML, CSS and JS, which are resuable, and which once built, can quickly be put to use in constructing a website. 
