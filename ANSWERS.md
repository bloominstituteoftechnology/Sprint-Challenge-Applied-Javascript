### Questions:

1.  What is the DOM?

**Answer**

The Document Object Model is an abstarction of the HTML document, provided by
the rendering engine. The HTML document is presented in a tree-like hierarchical
data structure, where there is one object representing the rool element i.e. the
document and all of its children being properties. Additionally every element
exposes some methods that will allow us to modify these properties which are
bound to the HTML itself.

2.  What is an event?

**Answer**

An event is an object that is constructed by the browser in response to any of
the various user interaction. The event object holds the data relevant to what
triggered the event.

3.  What is an event listener?

**Answer**

Event listeners are functions (handlers) that are invoked in response to an
event being triggered (user interaction). Event listeners are just callbacks.

4.  Why would we convert a NodeList into an Array?

**Answer**

We would almost always want to convert a NodeList into an Array to take
advantage of the `Array.prototype` methods. Although nothing in JS stops us from
using the `Array.prototype` methods on any data structure in JS (with the help
of call, apply or bind) it is more convenient to convert the NodeList into an
Array.

5.  What is a component?

**Answer**

HTML gives structure, CSS gives styling and JavaScript adds behavior. We
identify `elements` in HTML like `h1`, `p` etc. But elements when combined with
one another give meaning to the page. For example a news article has a heading,
a date and content. When we refer to this combination of elements and give it a
name called a News Article then we are thinking in terms of components which
bundle the structure, styling and the behavior.
