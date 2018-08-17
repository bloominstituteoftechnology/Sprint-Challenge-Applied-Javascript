### Questions:
1. **What is the DOM?**

The DOM or Document Object Model is a programming interface that treats HTML as a tree structure, displaying each node as an object that represents a part of the document. Since each node is an object, the object's properties can be manipulated and mutated to change the visual display of the elements on the page.

2. **What is an event?**

An event is when a user interacts with the elements on an HTML page window. Some common examples include `click`, `mouseover`, `mouseout`, `keydown`, `scroll`, `wheel`, and others.

3. **What is an event listener?**

An event listener is an object that handles events on the document. Under a given circumstance for a node, (e.g. `dblclick`), the event listener will execute a block of code.

4. **Why would we convert a NodeList into an Array?**

NodeLists are array-like structures, but do not have the same methods that array objects have. In order to better manipulate the data, it is better to convert NodeLists into Arrays, because Array objects have more methods at their disposal.

5. **What is a component?**

>"Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps."
-MDN Web Docs

Components allow us to abstract away blocks of code that we may find ourselves using very often, in order to prevent redundancy in code, which gives better system efficiency by following the DRY (Don't Repeat Yourself) principle. This gives us a modular approach to HTML and web applications, allowing us to utilize only the components necessary to achieve the desired results. 

Components are really any code that is separate from the main index files, whether that be css files, less files, JavaScript files and libraries, etc. that are then referenced or 'imported' into the main index.