let button=document.querySelector("button");
let qtext=document.querySelector("#quote");
let authorText=document.querySelector("#author");
let tagtext=document.querySelector("#tag");

const getData=async()=>{
const response=await fetch("https://api.quotable.io/random");
const data=await response.json();
qtext.innerText=data.content;
authorText.innerText=data.author;
tagtext.innerText=data.tags;
};
button.addEventListener("click", getData);
setInterval(()=>{
    getData();
},5000);