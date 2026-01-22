let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main");
let file = inputs[3].files[0];
let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let defaultBtnText = btn.textContent;


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    let file = inputs[3].files[0];

    if (file) {
        img.src = URL.createObjectURL(file);
    }

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;

    let span = document.createElement("span");
    span.textContent = inputs[1].value;

    let p = document.createElement("p");
    p.textContent = inputs[2].value;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(span);
    card.appendChild(p);

    main.appendChild(card);
    inputs.forEach(function(input){
        input.value = ""
    })
    btn.textContent = defaultBtnText;

});
btn.addEventListener("click", function() {
    inp.click()
});

inp.addEventListener("change", function(detls) {
    const fileName = detls.target.files[0];
    if(fileName){
        btn.textContent = fileName.name;
    }
});
