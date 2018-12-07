# Questions

### 1. What is the DOM?
The DOM is the document-object-model, and API which lets different programming languages and browsers interact with and change the HTML of a page
### 2. What is an event?
An event is any interaction a user has with a site.  The browser can detect these, and we can use event listeners to run code if we want a certain event to trigger something.
### 3. What is an event listener?
An event listener is a way for our code to react to user input.  We can place the listener on an element, and when the user interacts with the element in our desired way, we can run a callback function.
### 4. Why would we convert a NodeList into an Array?
A NodeList is an Array-like Object, and thus does not have all of the methods available to the Array prototype.  By converting to an array using Array.from(<NodeList>), we gain access to the array methods for greater manipulatability of the object.
### 5. What is a component? 
A component is simply a collection of HTML/CSS/JS (can be any or all of those 3) which can be reused within our codebase.