import {posts} from "./higher function order.js";

posts.forEach((post) => {
    console.log(post);
});
console.clear();


const filteredpost = posts.filter((post) => {
    return post.userId === 5;
})
console.log(filteredpost);


const mappedpost = filteredpost.map((post) => {
    return post.id * 10;
})
console.log(mappedpost);


const reducedpostvalue = mappedpost.reduce((sum , post) => {
    return sum + post;
});
console.log(reducedpostvalue)









