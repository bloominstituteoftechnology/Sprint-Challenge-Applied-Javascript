### Questions:
1. What is the DOM?

The browser converts website assets and converts them into a massive JavaScript object called the Document Objet Model so as to render the page for the user.  This object
represents all of the websites elements and their relationship to eachother.  By manipulating the data in this object directly we can create highly responsive behavior.

2. What is an event?

I think events are in effect a list of conditionals the browser is capable of testing.  The simplest expample is the mouse click.  The browser knows what you did and what you did it to.

3. What is an event listener?

An instruction we give to a browser to listen for a particular event.  We can then attach an event handler to that event and execute any instructions we specify.

4. Why would we convert a NodeList into an Array?

Because a NodeList doesn't have any methods we might typically associate with arrays attached to it's object prototype except for forEach() and even forEach() is not universally supported yet.
By converting to an array we can manipulate the data of the node list more easily.

5. What is a component? 

Typically when we say "component" we're referring to a useful UX feature someplace on a website.  Bootstrap is characterized by it's library of useful, ready-made components, for example.
Because lots of components will be used again and again, sometimes in the same site, sometimes from project to project, they are often built with constructor functions so that we can conveniently  make as many as we need while keeping our code DRY.
