// JavaScript Document

let main = document.querySelector('main');//Error 1: changed querySelectorAll to querySelector
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); //error 2: documant
let input = document.querySelector('input[type="text"]');//Error 3: input was not declared

submitButton.addEventListener('click', function(e) { //Error 4: clickityclick
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  main.appendChild(para);//Error 5: changed para to paragraph
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
  e.preventDefault();//This extra line was required because the page was refreshing when submit is clicked
});
