const fuck = document.querySelector(".iphone");

fuck.addEventListener("click", (event) => {
 fuck.className = "apple";
 event.target.textContent= "bye"
    setTimeout( () => {
        fuck.className = "iphone";
        fuck.textContent="Hi"
    }, 1000);

}) 







