# Questions

1. What is the DOM?
2. What is an event?
3. What is an event listener?
4. Why would we convert a NodeList into an Array?
5. What is a component? 

1. The DOM is a javascript object which contains all of the information necessary to represent a web page. It serves as an API for additional code to interact with the page.

2. An event is an interaction with a website which is detected and tracked by a browser. Common events include a click, scroll, window resize, loading of resource complete, keyboard press.

3. An event listener is a method called on a DOM element such that when an event occurs on that element, code is executed (as provided in a callback function).

4. It is sometimes useful to convert a NodeList into an Array to gain access the the methods that Arrays have. NodeLists are Array-like and thus do not offer the full suite of methods that the array prototype does.

5. A component is a reusable set of code including HTML, CSS, and Javascript parts. Writing in components produces DRY code and results in the simplest way to replicate complex elements on a web page.