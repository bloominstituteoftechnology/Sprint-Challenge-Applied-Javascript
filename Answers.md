### Questions:
1. What is the DOM?
Document Object Model represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

2. What is an event?
Events are the way we users interact with the page. Any time there is some interaction by way of mouse, keyboard, etc, the DOM creates and propagates an event object.

3. What is an event listener?
We can chose specific elements to listen to specific events and fires a callback when that event occurs. This is called an event listener.

Once we have an element selected, we can use the ‘.addEventListener’ method on that element. .addEventListener will take two arguments, first the event to listen for, second the callback to fire when that event is triggered.

4. What is jQuery?
The DOM manipulation library jQuery was introduced to the web development world. jQuery introduced ideas such as selecting elements based on CSS type queries, simple clear methods allowing for easy DOM manipulation regardless of browser, event delegation, animations, and built in AJAX calls.

5. What is a component? 
 Elements that have very similar functionality, perhaps they all have click handlers that use the same callback, perhaps they interact with the user in a similar way, perhaps they share the exact same styling. As we now know, these elements are referred to as components. 
