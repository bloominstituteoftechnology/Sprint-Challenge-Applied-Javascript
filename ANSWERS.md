### Questions:
**1. What is the DOM?**

DOM (the document object model) is a representation of the HTML that makes up a web page. It represents the page structure as a series of parents and children. Almost any time a website does something, it's because JavaScript can access and act upon the page and its HTML through the DOM -- e.g. buttons and alerts.

**2. What is an event?**

An event is when something "happens" on a page -- mostly when the user interacts with my page in some way. Events tell JavaScript to respond in some way -- e.g. to display an alert when the user loads a page. Examples of events include clicks, page loads, mouse movements over/in/out of an element, pressing or unpressing a key, and resizing the window.

**3. What is an event listener?**

Event listeners are functions that perform an action when an event they're "listening for" happens. For example, I can program an alert that changes the background color of my page from white to black when the user clicks on my light-bulb image. My code is "listening for" the click (the event) and then executes some code in response (changes the background color).

**4. Why would we convert a NodeList into an Array?**

Because NodeLists don't have many of the Array-like properties (`forEach`, `map`, `slice` etc) and we can't use methods on them.

**5. What is a component?**

Components are reusable pieces of code, e.g. a dropdown menu.
