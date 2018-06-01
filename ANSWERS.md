### Questions:
1. What is the DOM?
> The DOM stands for Document Object Model. `DOM = browserInterpreter(yourHTML, yourCSS, yourJS)`. It's an API with a tree-like structure. Each node or object can be manipulated programmatically.
2. What is an event?
> An event is something that occurs. This could be a user action, ie clicking the mouse or hovering or anything that occurs in the browser. This could also be things that happen outside of the user, like when the page load, or if the network is  off-line.
3. What is an event listener?
> A listener is a construct that can be added or removed to certain objects in the DOM. It is attached and "listens" for a specified event. When that event is heard, it fires a handler that will handle the event in some way.
4. Why would we convert a NodeList into an Array?
> A Nodelist doesn't have array methods like, .map(), .filter(), etc. So if we needed to .map over a NodeList we would first transform it into an Array.
5. What is a component? 
> A component is a set of DOM elements that are grouped by function and are smart. So a header with nav links and logo might be one component. It makes sense to group it this way as all the functionality is within this certain set of DOM elements. The actions the links can do, are also written in the component itself. The component is then it's own littl thing.
