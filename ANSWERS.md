### Questions:
1. What is the DOM?
   * The `DOM` is the Document Object Model. You can think of it as the bridge(or API) between HTML and JavaScript. It is a logical tree of nodes which contain objects which represent HTML elements. You can use this to change the structure, style, or content of a webpage and even add event triggers.
2. What is an event?
   * An `event` is something that takes place in the DOM. It can be user-generated like a **click** or a **keypress**, or it can be API genereated such as one that lets you know an animation has finished or a video has been paused.
3. What is an event listener?
   * An `eventListener` attaches an event to a specific DOM object. For example, `button.addEventListener("click", () => {})` attaches a **click** event to a button which executes the given callback function whenever that button is clicked.
4. Why would we convert a NodeList into an Array?
   * While `NodeLists` are *array-like*, they are not `Arrays`. They do not have many of the methods Arrays have such as `.map()` or `.filter()`. We convert NodeLists to Arrays in order to have access to these features.
5. What is a component?
   * `Components` let you split your code up into independent, reusable chunks. The basic idea is to create custom elements whose functionality and behaviour is encapsulated away from the rest of your code.