### Questions:
1. What is the DOM?
"API that creates a model of the window HTML which can then be manipulated with javascript. It serves as an intermediatry between the window object and the javascript one would like to use to manipulate stuff on the window object."

2. What is an event?

"An event is a specific action that, most often, is triggered by the user (e.g., mouse click, mouse scroll, copying/cutting/pasting something on the page.)"

3. What is an event listener?
"An event listener is something that "listens" for the specific action described in the answer to question 2. It's added via the .addEventListener method to a specific item/object on the window, so when the specific action occurs on that item/object, the specific action from above triggers a change on the page. 

4. Why would we convert a NodeList into an Array?

NodeList doesn't have access to array methods. It's array-like but not an array. 

5. What is a component? 

A component is the intertwined html/css/js that is used to make objects on the window smarter. A component is said to be the intertwined use of html/css/js because, the js code that makes the window smarter refers to both the html and css of the window to make an object do what you want it to do (e.g. adding/removing a class name to a class in js in order to add/remove a specific style in the css.)
