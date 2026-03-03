document .getElementById("firstid").addEventListener("input",(event)=> {
    const regex =/^\(\+91\) ([1-9]\d{3})[- ](\d{6})$/g;
    const input = document.getElementById("firstid");
    const value = input.value;
    const example = document.getElementById("example");
    const check = regex.test(value);
    if(!check && value.length) {
        input.classList.add("inputcolor");
        example.classList.add("display");
    } else {
        input.classList.remove("inputcolor");
        example.classList.remove("display");
    }
}); 

document.getElementById("form").addEventListener("submit",(event)=> {
    event.preventDefault();
    const input = document.getElementById("firstid");
    const regex = /^\(\+91\)[- ]/g 
    const result = input.value.replaceAll(regex,"");
    console.log(result);
});
