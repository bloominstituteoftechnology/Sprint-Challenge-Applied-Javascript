### Questions:
1. What is the DOM?

When you load a webpage in your browser, the Document Object Model (DOM for short) is loaded. The DOM is like a tree, HTML elements make up the leaves and branches. We can interact with each leaf or branch through javascript instead of having to dip into our CSS or HTML files to do so. This also lets us do some fancy stuff like making a menu slide in or out.

2. What is an event?

You can think of an event as an action you take on a webpage. Did you just move your mouse? Boom. That's an event. Did you click a tab? You bet your butt that's an event or two.

3. What is an event listener?

To really get a clearer picture of an event listener I recommend setting the scene by playing Every Breath You Take by The Police. Imagine that your browser is watching your every move, desperately waiting for you to take an action on the webpage it has loaded for you. It patiently watches as you hover over a tab and then gleefuly changes the color for you. It notices you change your mind and instead hover your mouse over the hamburger menu in the top-left corner. The instant you make up your mind to click on that menu by "clicking" on your mouse or trackpad, the browser provides you a slow, but not too slow, slide out of that webpage's context menu. Just enough for to notice that it happened. Pure bliss.

TLDR; an event listener waits for you to take an action and then makes a move (triggers a function)!

4. Why would we convert a NodeList into an Array?

We'd convert a NodeList into an Array so we have access to some handy-dandy Javascript methods that we can only use on Arrays. We've been using .map, but I'm sure we can use the other common methods such as .filter or .reduce.

5. What is a component? 

Well when write code we want to re-use as much of it as possible to make the code more neat and efficient amonst other things. A component allows us to do that, since it's a reusable custom element. An example is creating a reusable tab component for easy creation of new tabs that have all the functionality of the other ones we've already created.
