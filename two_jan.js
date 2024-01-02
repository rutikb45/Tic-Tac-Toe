let div = document.querySelector("div");


div.style.backgroundColor = "red";


let box = document.querySelector("#box2");

box.style.backgroundColor = "red";

box.innerHTML = "hello";

let list = document.querySelector("#demo");

let btn = document.createElement("button");
btn.innerText = "click me";

// list.append(btn);
// list.prepend(btn);/7

let btn2 = document.createElement("button");

btn2.innerHTML = "second button";
list.prepend(btn2)
list.append(btn)