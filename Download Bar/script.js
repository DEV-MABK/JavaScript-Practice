let btn = document.querySelector(".download-btn");
let percentage = document.querySelector(".percentage");
let count = 0;
let progress = document.querySelector(".progress");
let sec = 5;
let download = document.querySelector(".download-btn");
btn.addEventListener("click", function(){
    setInterval(() => {
        if(count < 100) {
            count ++;
            progress.style.width = `${count}%`
            percentage.textContent = `${count}%`
            if(count < 100) {
                download.textContent = "Downloading..."
            } else {
                download.textContent = "Downloaded"
            }
        }

    }, (sec * 1000)/100);

});