### Questions:
1. What is the DOM?
  The DOM is an Application Programming Interface between some HTML and the browser.
  The DOM renders the HTML of a page, organizing it into logical blocks,
  which it then provides us with some useful functions with which to manipulate
  the content herein.  
2. What is an event?
  An event is some action, possibly made by a user but could also be system related,
  which the browser and the DOM can recognize. This could be a click, scrolling,
  an HTTP requests or page refresh or just after a certain amount of time has
  passed.
3. What is an event listener?
  An event listener is a pre-programmed action taken when the browser interprets
  and event has happened. It is a response to an action, which can be a function,
  a set of functions, or some simple CSS alterations, anything really.
4. Why would we convert a NodeList into an Array?
  NodeLists lack all the functionality of an Array. Our Array objects inherit all
  kinds of useful functions which would be a little too robust for every Node object
  to needlessly inherit. We convert NodeLists to Arrays to gain and utilize this
  functionality.
5. What is a component?
  A component is a set of HTML, CSS and Javascript all packaged together for a
  certain functionality. This functionality could be for a carousel, a tabs window
  or even a button. Packaging the necessary ingredients for these components together
   also allows us to easily replicate the components with predictable results.
