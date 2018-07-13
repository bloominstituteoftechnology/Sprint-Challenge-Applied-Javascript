### Questions:
1. What is the DOM? document object model it provides a standard for accessing documents. 
2. What is an event? for example click double click drag keyborard action. Even the page loading is event. Some form of action taking place. 
3. What is an event listener? it listens of an event but it more like watches for it. It is asscoiated with an event and call back function. So when the event takes place in the area the event listener is at it will run the callback function. Its kind of  like a security camera for events "once you see the bugular call the police"  only the bugular is an event and instead of dialing 911 you perform the call back function. 
4. Why would we convert a NodeList into an Array? using the Array.From method  Array.From()
5. What is a component? If I had several buttons that needed functionality or events and call backs (event listener's ) associated with it. I would build a Class specifically for this purpose. It is a component in the since it is part of a machine. It is a way to keeep code dry. So instead of  .addEventListener  numerous times the class built for the purpose of creating event listeners would do this. 
