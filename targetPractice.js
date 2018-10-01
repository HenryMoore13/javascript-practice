function makeLinksOpenNewWindow() {
    var links = document.querySelectorAll("a");
    links.forEach(function(link) {
        link.target = "_blank";
    });
}

function addClassColThree() {
    var div = document.querySelector("#set-col-3");
    div.classList.add("col-3");
}
function swapClassColor() {
    var div = document.querySelectorAll("#background-swap div");
    div[0].classList.remove("bg-primary");
    div[0].classList.add("bg-danger");
    div[1].classList.remove("bg-danger");
    div[1].classList.add("bg-primary");
}
function addFavorites() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("FootBall!"));
    ul.appendChild(li);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Candy!"));
    ul.appendChild(li);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Money!"));
    ul.appendChild(li);
}
function hideElement() {
    var element = document.querySelector("#hide");
    element.classList.add("d-none");
}
function showElement() {
    var element = document.querySelector("#show img");
    element.classList.remove("d-none");
}
function alertDanger() {
    var alert = document.querySelector("#success-danger div");
    alert.classList.remove("border-success");
    alert.classList.add("border-danger");
    alert.classList.remove("text-success");
    alert.classList.add("text-danger");
}
function breakButton() {
    var button = document.querySelector("#button-disable input");
    var input = document.createAttribute("disabled");
    button.setAttributeNode(input);
}
function onlyRead() {
    var button = document.querySelector("#readonly-input input");
    var text = document.createAttribute("readonly");
    button.setAttributeNode(text);
}
function textDiff() {
    var text = document.querySelector("#add-as-text");
    text.innerText = "<b>Hey Mom!</b>";
    var html = document.querySelector("#add-as-html");
    html.innerHTML = "<b>Hey Mom!</b>";
}
function button() {
    var btn = document.querySelector("#add-on-click");
    btn.addEventListener("click", function() {
        alert("Alert!");
    });
}

swapClassColor();
makeLinksOpenNewWindow();
addClassColThree();
addFavorites();
hideElement();
showElement();
alertDanger();
breakButton();
onlyRead();
textDiff();
button();
