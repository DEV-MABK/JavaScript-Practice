let div = document.querySelector(".abc");

div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "green";
});

div.addEventListener("mouseout", function () {
    div.style.backgroundColor = "red";
});

window.addEventListener("mousemove", function(detls){
    div.style.top = detls.clientY + "px";
    div.style.left = detls.clientX + "px";
})