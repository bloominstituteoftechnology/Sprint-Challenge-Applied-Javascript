### Questions:
1. What is the DOM?

    The Document Object Model is the HTML document, but now in a code form where
    we can access the elements through Javascript and do things with them. The
    DOM is a set of Nodes that stretch out like a tree. There is the root node,
    which is the html element, which contains head and body elements, and they
    contain even more elements. Any html page loaded into a browser is loaded 
    into a DOM format. We can then manipulate the elements in a variety of ways,
    including changing the text and style, adding or removing elements, playing
    with element attributes, and monitoring events that propagate throughout the
    DOM. Each element or node, has pointers to child elements it contains and a
    pointer to its parent node.

2. What is an event?

    Events are actions that happen within a webpage that can be monitered and
    captured. Examples include input from the mouse and keyboard, the loading
    of the page, form submissions, resizing the browser window, media control,
    and errors.

3. What is an event listener?

    An event listener is essentially a handler for specified events that may
    occur during the page's life. This allows us, through Javascript, to make
    the pages highly functional because we can listen for events and run a
    particular algorithm if that event occurs.

4. Why would we convert a NodeList into an Array?

    A NodeList is an array like object, but doesn't have the full functionality
    of an array. When we convert a NodeList to an Array, we gain methods like
    map, filter, reduce, sort, and join methods along with all the rest of what
    an array provides. A NodeList is rather limited with just a foreach method.

5. What is a component?

    Components are custom objects that encapsulate logical units of a web page
    into reusable and repeatable elements. If done correctly, components will
    contain all the necessary html elements and functionality for a logical
    unit of the page. Consider the header of a page to be a logical unit, or
    a blog post or article. Things like tables, lists, and forms can also be
    turned into components. The main point is that a component becomes a 
    class in your code that you can use like any other Javascript object, the
    only difference is that this object will manipulate some part of the web
    page. Components are more intuitive for us humans and make for cleaner
    code.
