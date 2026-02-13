// Turvallinen oletusviesti. Vaihda tähän oma viestisi:
const MESSAGE = "Tervetuloa! Tämä on esimerkkiteksti, jonka voit vaihtaa haluamaksesi.";

const start = document.getElementById('start');
const stage = document.getElementById('stage');
const goBtn = document.getElementById('goBtn');
const typeEl = document.getElementById('type');

function typeText(text, speed = 40){
  typeEl.textContent = '';
  let i = 0;
  const t = setInterval(()=>{
    typeEl.textContent += text.charAt(i++);
    if(i > text.length) clearInterval(t);
  }, speed);
}

goBtn.addEventListener('click', ()=>{
  start.classList.add('fade-out');
  setTimeout(()=>{
    start.classList.add("fade-out");

setTimeout(() => {
  start.style.display = "none";
  stage.classList.remove("stage-hidden");
  stage.classList.add("stage-visible");
  typeText(MESSAGE);
}, 480);
    typeText(MESSAGE);
  }, 480);
});

// OHJE: muokkaa vain MESSAGE-riviä yllä.
``
