### Questions:
1. What is the DOM?

The DOM is the programmatic interface by which scripts (usually JavaScript) running in the browser may update and receive events from the view. The acronym spells out "Document Object Model," and represents a tree of nodes from which the UI is rendered. Scripts may access and modify the tree and its nodes, thereby changing and enhancing the UI. 

2. What is an event?

An event is something that happens within the browser (either user interaction or some internal load state) which it might be useful for a script running in the browser to know about. This includes clicks, drags, and mouse hovers, among many others. 

3. What is an event listener?

An event listener is a hook which will look for a specific type of event and, if that event happens, run a specific bit of code in response. 

4. Why would we convert a NodeList into an Array?

Because NodeList does not inherit all of the methods from Array, including map. In order to access those methods, be must first convert it to an array.

5. What is a component? 

A component is a bundle of code that does a specific thing. More specifically, it's a kind of template for creating elements with the desired functionality. Components may wrap other components, adding layers of functionality.
