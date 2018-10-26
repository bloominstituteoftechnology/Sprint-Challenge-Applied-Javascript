# Questions

1. What is the DOM?

The DOM is simply the object representation of the html elements in whatever webpage we are working in. What is magical about it is that by accessing the DOM, we can then start to work and manipulate all those html and css elements, allowing us to change the styling, the structure, and even the content of the page itself, all without adding a single line of code to the CSS and HTML proper. The DOM is itself a tree structure made up of tree nodes, all containing the same property keys as each other node (the very proto of the whole thing is an object node)
2. What is an event?
An event is simply the way a user interacts with a given webpage. Any interaction from the user, such as a keyboard stroke, mouse click or hover, etc. is all captured by the DOM and then propagated as an event object. This special object can then store information about whatever the user specifically did and then send that information up and down the DOM's tree of nodes in either direction, up or down! Pretty cool!
3. What is an event listener?
An event listener is the obvious extension to the above; certainly, one can capture all the event objects one wants, but ideally, you would want to have specific lines of code ready to fire when specific events are caught, ready to be called back by other elements to do other work. These are event listeners, and they do stuff like open a dropdown button when a user is caught mouse clicking a particular place on the webpage with a event listener attached to it.
4. Why would we convert a NodeList into an Array?
Funny enough, the Nodelist one gets when we use the querySelectorAll() or getElementsByClassName() functions is actually better than the HTMLCollection that previous developers had to work with, as it does have access to the .forEach function. However, both these objects are merely array-likes, and do not have the full functionality of an actual array object. 

Put more specifically, these objects do not have access to any other array method but .forEach (for the NodeList), as they were designed to be browser/language agnostic, so to use the all important .ma and .reduce functions, one has to convert these array-likes to arrays proper with Array.From. 
5. What is a component? 
(this is my weakest part of my knowledge - its the usage of Javascript to make clonable code that can be reused, like in Bootstrap!)
When you bundle HTML, CSS and Javascript in a nice package, you get a component which can be reused in a website and an application (or done properly, in entirely different projects, in other computers having the same enviorment as you!). I think of them as really cool, interative lego blocks that a developer can make or borrow from others to build whatever special system they want to make. Cool Cool.