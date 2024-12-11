
//Using JS on paragraph 1
// let DOM = document.getElementById("DOM");
// DOM.style.color = "red";
// DOM.style.fontSize = "20px";
// DOM.style.backgroundColor = "grey";
// DOM.innerHTML = "I know what the DOM is😎";



//Using JS on paragraph 2
// let element = document.getElementById("element");
// element.style.color = "purple";
// element.style.fontSize = "20px";
// element.style.backgroundColor = "pink";
// element.innerHTML = ("I know how to access/ select element in the DOM.👊🏽");

//Using JS on paragraph 3
// let style = document.getElementById("style");
// style.style.color = "green";
// style.style.fontSize = "20px";
// style.style.backgroundColor = "lightgreen";
// style.innerHTML = ("I know how to use the style methods to change the style of an element in DOM.☑️");

//Using JS on paragraph 4
// let styling = document.getElementById("styling");
// styling.style.color = "blue";
// styling.style.fontSize = "20px";
// styling.style.backgroundColor = "lightblue";
// styling.innerHTML = ("I known how the styling properties differ in JS from CSS🤙🏽");

//Using JS on paragraph 5
// let excited = document.getElementById("excited");
// excited.style.color = "black";
// excited.style.fontSize = "20px";
// excited.style.backgroundColor = "yellow";
// excited.innerHTML = ("Yes i did it!! I manipulated the DOM and styled my elements🥰🥰🥰🥰");


let DOM = document.getElementById("DOM");
let element = document.getElementById("element");
let style = document.getElementById("style");
let styling = document.getElementById("styling");
let excited = document.getElementById("excited");



DOM.addEventListener("mouseover", () => {
    DOM.style.color = "red";
    DOM.style.fontSize = "20px";
    DOM.style.backgroundColor = "grey";
    DOM.innerHTML = "I know what the DOM is😎";
});


element.addEventListener("click", () => {
    element.style.color = "purple";
    element.style.fontSize = "20px";
    element.style.backgroundColor = "pink";
    element.innerHTML = ("I know how to access/ select element in the DOM.👊🏽");
});


style.addEventListener("mouseout", () => {
    style.style.color = "green";
    style.style.fontSize = "20px";
    style.style.backgroundColor = "lightgreen";
    style.innerHTML = ("I know how to use the style methods to change the style of an element in DOM.☑️");
});


styling.addEventListener("mouseover", () => {
    styling.style.color = "blue";
    styling.style.fontSize = "20px";
    styling.style.backgroundColor = "lightblue";    
    styling.innerHTML = ("I known how the styling properties differ in JS from CSS🤙🏽");
});


excited.addEventListener("click", () => {
    excited.style.color = "black";
    excited.style.fontSize = "20px";    
    excited.style.backgroundColor = "yellow";
    excited.innerHTML = ("Yes i did it!! I manipulated the DOM and styled my elements🥰🥰🥰🥰");
});

// let AX10 = document.querySelector(".AX10");
// let open = document.querySelector(".open");
// let close = document.querySelector(".close");

function showItem() {
let AX10 = document.querySelector(".AX10");
AX10.style.display = "block";
let close = document.querySelector(".close");
close.style.display = "block";
}
let open = document.querySelector(".open");
open.addEventListener("click", showItem);
function hideItem(){
let  AX10 = document.querySelector(".AX10");
AX10.style.display = "none";
close.style.display = "none";
};

let close = document.querySelector(".close");
close.addEventListener("click", hideItem);