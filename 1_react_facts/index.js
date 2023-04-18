ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

const elm = document.createElement('h1');
const text = document.createTextNode('Hello, React!');
elm.appendChild(text);
elm.classList.add('header');
document.getElementById("root").appendChild(elm);

//or

const h1 = document.createElement('h1');
h1.textContent = "Hello, React!";
h1.className = "header";
document.getElementById("root").append(h1)