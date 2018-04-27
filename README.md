# Sprint-Challenge Applied Javascript

We've covered a lot this week. We've learned how to plug Javascript up to our HTML/CSS static pages and create dynamic content. We've learned about events and how to listne for, and act on, them. We learned about jQuery and how this library can cut our development time down and provide tons of useful methods for extending the functionality of the DOM. And finally, we learned about component architecture and how to build compoennts that share functionality and styling with many elements. In this Sprint Challenge we will be utilizing all of the above. 

## Assessing your Applied Javascript Fu
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words.

### Questions:
1. What is the DOM?
2. What is an event?
3. What is an event listener?
4. What is jQuery?
5. What is a component? 

## Challenge
We are going to create a Lambda Newspaper. The styling is modeled after the [LA Times Website](http://www.latimes.com). Open it up and you will notice all of the HTML and CSS has already been created and imported properly. Our job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag. 

* Look through the HTML code paying particular attention to the Tabs component, and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected. 
* Following the instructions in the `Tabs.js` file, complete the `Tabs`, `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Use jQuery wherever possible remembering the `.each` and `.map` methods (hint: the callback arguments order is `(index, item)` ) avaialble to us, as well as jQuery's ability to iterate over collections implicitly. 
* Once you get your `Tabs` component working properly add a couple more articles yourself and check out how it works.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif "Example of working project")
.

## Stretch Challenge
Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply uncomment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs` component for assistance.
* Complete the carousel functionality in `Carousel.js`
* If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.
* If you have finished the above, play around with the styling on all the components, and understand how each is built.
