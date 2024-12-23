// https://dummyjson.com/quotes
const URL='https://dummyjson.com/quotes'
fetch(URL)
.then(response=>{
    console.log(response);
})
.catch(err=>console.log("Error"));
// https://dummyjson.com/todos
const URL_1='https://dummyjson.com/todos'
fetch(URL_1)
.then(response=>{
    console.log(response.status);
})
.catch(err=>console.log("Error"));
// https://jsonplaceholder.typicode.com/photos
const URL_2='https://jsonplaceholder.typicode.com/photos'
fetch(URL_2)
.then(response=>{
    console.log(response.url);
})
.catch(err=>console.log("Error"));
// https://randomuser.me/api/
const URL_4='https://randomuser.me/api/'
fetch(URL_4)
.then(response=>{
    console.log(response.type);
})
.catch(err=>console.log("Error"));
// https://pokeapi.co/api/v2/pokemon/ditto
const URL_5=' https://pokeapi.co/api/v2/pokemon/ditto'
fetch(URL_5)
.then(response=>{
    console.log(response);
})
.catch(err=>console.log("Error"));