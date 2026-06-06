const roles = [
"Software Engineer",
"AI/ML Enthusiast",
"Web Developer",
"Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect(){

if(charIndex < roles[roleIndex].length){

typingElement.textContent +=
roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typingElement.textContent =
roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}
else{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

setTimeout(typeEffect,300);

}

}

document.addEventListener("DOMContentLoaded",()=>{

if(roles.length){
setTimeout(typeEffect,500);
}

});