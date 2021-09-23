
addEventListener("DOMContentLoaded", function() {
//OBJECTIVE 1
    let body = document.body;
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    addEventListener("click", click);
    function click() {
        alert("You got this!!!")
    }

//OBJECTIVE 2
    let button = document.getElementById("button");
    button.addEventListener("click", function() {
    let message = document.getElementById("text-box").value;
    alert(message);
    })
//OBJECTIVE 3
    let div = document.getElementById("div");
    div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "purple";
    })
    div.addEventListener("mouseleave", function() {
    div.style.backgroundColor = "teal";
    })
//OBJECTIVE 4
    let p = document.getElementById("p");
    let pText = document.createTextNode("I think I might actually have this!!!...I think!");
    p.appendChild(pText);
    document.body.appendChild(p);

    p.addEventListener('click', function() {
        let colors = '#';
        let letters = [""];
        colors += letters[Math.floor(Math.random() * letters.length)];
        p.style.color = colors; 
    });

//OBJECTIVE 5
    
});
