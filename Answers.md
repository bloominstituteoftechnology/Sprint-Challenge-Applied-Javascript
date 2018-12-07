# Questions

1. What is the DOM?
- The DOM is a visual representation of our HTML. Meaning that what is projected by our Browser isn't actually our harded coded HTML but a visual represenation of it. We can use JavaScript to manipulate DOM objects by either inputing new content or styling them according to our liking. 

2. What is an event?
- An event is a occurence on a web page caused by a user or browser. Some come example our Mouse, Touch, Window, Document or Key Events. We can use JavaScript to listen for these events. (Well talk about that more below).
3. What is an event listener?
- An event listener is a method we can attach to a specific element so that when a specified event occurs to it we can fire off a function. For example we can target our navigation <a> tags and on the event "mouseon" we can change the font size, color, text-decoration, whatever CSS property we desire.

4. Why would we convert a NodeList into an Array?
- The logic behind this stems from the access of method we gain from an Array. While NodeList have some useful methods at their disposal, Arrays have a bevy of options for us to chose from so in some instances we'll need to convert our NodeLists to arrays to gain access to that advance method library. 

5. What is a component? 
- A component is a chunk of reusable code that can be inputted into our applications to serve a defined purpose over and over again. Components are great because they are focused on a specific job while remaining uniform and resuable. Bootstrap has a very impressive library of components, but we can also create our own using HTML,CSS and JavaScript. When building components we tend to store them in their own folders and link them (and later import) them to our HTML seperately. 