function hamburg() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function cancel() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.style.display = 'none';
}


const texts = ["ASPIRING WEB DEVELOPER", "BPO EMPLOYEE"];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typewriter() {
  if (charIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typewriter, speed)
  }
  else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText(){
  if (textElements.innerHTML.length>0) {
    textElements.innerHTML = textElements.innerHTML.slice(0,-1);
    setTimeout(eraseText, 50);
  }
  else {
    textIndex = (textIndex +1) % texts.length;
    charIndex = 0;
    setTimeout(typewriter,500);
  }
}

window.onload=typewriter;