//use the set attributs navbar to topnavigation

var parent = document.getElementById("navBar");
parent.setAttribute("id", "topnavigation");

//2point
var element = document.createElement("li");
var textnode = document.createTextNode("Technology We use");
//append

element.appendChild(textnode);

parent.firstElementChild.appendChild(element);

var ul = document.getElementById("topnavigation").firstElementChild;

//get the hold of first and last child under ul

let first = ul.firstElementChild;
let last = ul.lastElementChild;

document.write(first.firstChild.firstChild.nodeValue + "<br>");
document.write(last.firstChild.nodeValue + "<br>");
