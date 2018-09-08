### Questions:
1. What is the DOM?
DOM = document object model.  It's basically a live version of the rendered HTML that can be modified on the fly via javascript.

2. What is an event?
An event is an action that takes place within the browser like a mouse click, scroll, drag, drop, hover, ect.

3. What is an event listener?
An event listener tells javascript to watch for a particular action to occur and change the DOM depending on the code we right.  So if someone makes a line of code saying the text should change colors when a certain paragraph is being read by a screen reader, the event listener listens for that action to occur and changes the styling.

4. Why would we convert a NodeList into an Array?
A Nodelist is an array like object. While it shares some comminalities of arrays like index, length, and for each one can not use other array properties like map, or filter.  If we wanted to create multiple new object using map we would first have to transform the nodelist to an array.

5. What is a component? 
A component is a small peice of a project.  In javascript components allow code to become reusable.