const containot = document.getElementById('container');
const container = document.querySelector('section#container');
const second = document.querySelectorAll('li.second');
const thirdOL = document.querySelector('ol li.third');
container.innerHTML += 'Hello!';
const footer = document.querySelector('div.footer');
footer.classList.toggle('main');
footer.classList.toggle('main');
const newLI = document.createElement('li');
newLI.innerText = 'four';
document.querySelector('ul').append(newLI)
const ol = document.querySelectorAll('ol li');
for(let li of ol){
    li.style.backgroundColor = 'green';
}
footer.remove();