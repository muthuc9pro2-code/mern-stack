document.getElementById("inputvalue").addEventListener("input", (event)=> {
    const input = document.getElementById("inputvalue");
    const example = document.getElementById("example");
    const value = input.value;
    const regex = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/g;
    const check = regex.test(value);
    if (!check && value.length) {
        input.classList.add("inputerror");
        example.classList.add("display");
    } else {
         input.classList.remove("inputerror");
        example.classList.remove("display");
    }
});

document.getElementById("form").addEventListener("submit", (event)=> {
    event.preventDefault();
    const input = document.getElementById("inputvalue");
    const regex = /[()-]/g;
    const result = input.value.replaceAll(regex,"");
    console.log(result);
})
