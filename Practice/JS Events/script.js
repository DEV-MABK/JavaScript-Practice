let sel = document.querySelector("select");
let inp = document.getElementById("input");
let btn = document.getElementById("btn");

sel.addEventListener("change", function(detls) {
    console.log(detls.target.value)
    h1.innerText = `${detls.target.value} Device Selected`;
});
let h1 = document.querySelector("#Device");


btn.addEventListener("click", function() {
    inp.click()
});

inp.addEventListener("change", function(detls) {
    const fileName = detls.target.files[0];
    if(fileName){
        btn.textContent = fileName.name;
    }
});