# Questions

1. What is the DOM?
  The Document Object Model is an object representation of the HTML elements of a webpage that is built as a tree data structure.
2. What is an event?
  An event is an action that takes place in the DOM. Some of them are user-generated, such as mouse and keyboard events, while others are APIs-generated, such as animation finished and video paused.
3. What is an event listener?
  An event listener is an object that handle a triggered event.
4. Why would we convert a NodeList into an Array?
  Because NodeList is a cross-language array-like object that comes with limited methods. In order to use the full methods from JavaScript Array, we need to convert NodeList into an Array using Array.from method which return a shallow copied Array object.
5. What is a component?
  A component is a reusable custom element, with their functionality encapsulated away from the rest of the code.

Source: MDN web docs and Lambda Training Kit