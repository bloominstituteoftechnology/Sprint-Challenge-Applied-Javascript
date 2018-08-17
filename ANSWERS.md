### Questions:

1. What is the DOM?

The DOM is an API which is middleware like that bridges the html <---> JS gap. The DOM is a tree based construct of objects that JavaScript can use to ad, remove or otherwise manipulate the HTML Live as the DOM is updated live. Some methods can trigger an instant redraw where others have a defered redraw that only happens on a manual refresh.

2. What is an event?

An event in the context of the DOM is an action that is usually caused by a user but can be triggered programatically. some triggers could be a mouse click, a scroll of the mouse wheel, a keypress or a range of variaous other possible interactions. these are covered in the MDN documents online.

3. What is an event listener?

Event listeners are code constructs that take in an event and a callback function as parameters and attach to an object to listen on that object for the event trigger to happen. this then causes the callback function to be invoked and proecess any event parameters that may have been passed in.

4. Why would we convert a NodeList into an Array?

We may convert a NodeList in to an array to allow the use of Array methods on the resulting Array object as a NodeList has a limited moethod and property set compared to an aray.. The NodeList does however allow a for each to be called upon it for some basic functionality and can have properties such as its length read.

5. What is a component? 

A component is an encapsulated set of code such as a module that has enough code in it to work seperately from the main code base in its own area. This makes it very suited to a modular design and works well with apps that need to be scaleable. A component should be able to be moved from the app it was in originally and plugged in to give a similar functionality in a new app. This is not always the case in practicality dependant upon how well the abstractions were implemented by the developer.
