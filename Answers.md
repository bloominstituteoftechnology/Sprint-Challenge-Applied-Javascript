### Questions:

#### 1. What is the DOM?

The DOM stands for "*Document Object Model*". That means it is an **Object** which **models** the webpage, the **document**. The browser generates this JS object when it parses through the HTML and CSS. Once it generates it, the DOM becomes the basis of what is outputted in the browser window. 

That is, the DOM is a "live" data structure. Make any changes to the DOM, and you make changes to what gets displayed. This property is crucial for it makes the DOM the vehicle for JS to manipulate the web page.

#### 2. What is an event?

In the context of this week's topic, an event is a user interaction with the web page, like a mouse click, scrolling, or button press that the browser can recognize. Because the browser can recognize, you can program code that runs when the browser recognizes an event so that your script can react to user input.

#### 3. What is an event listener?

An event listener is how the browser can recognize events. It's a function that waits for an event specified, like "click" or "wheel", and runs a callback function when the function detects it.

#### 4. What is jQuery?

JQuery is a JavaScript library. It was a born out of a need for a uniform and concise way to select and manipulate elements in the DOM in the midst of large differences between browsers. Therefore, it streamlines DOM selection with `$` operators and accessible methods that can be chained with said selections.

#### 5. What is a component? 

A component is blocks of code that can be used over and over again to create elements with the same JavaScript functionality. By using classes, multiple elements on the web page can have the same JS functions without writing those functions over and over again by instantiating the object representations of those elements in the DOM with classes.
