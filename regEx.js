let pattern = /^[\w.]+@[a-zA-Z-]+.[a-zA-Z]{1,3}$/;
const input = "muthukumar@gmail.com"
const didmatch = pattern.test(input);
console.log(didmatch);