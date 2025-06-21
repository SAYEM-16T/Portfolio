const texts = ["Competitive Programmer", "Problem Solver", "Self Learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
}

window.onload = type;

const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Check stored mode
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
} else {
  body.classList.add('light');
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});

function openmenu() {
    document.getElementById("sidemenu").classList.add("show");
  }
  
  function closemenu() {
    document.getElementById("sidemenu").classList.remove("show");
  }
  function animateCounters() {
    const counters = document.querySelectorAll(".count");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-count");
      let count = 0;
      const step = Math.ceil(target / 50); // Faster animation
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.innerText = `${target}+`;
          clearInterval(interval);
        } else {
          counter.innerText = `${count}+`;
        }
      }, 20); // speed
    });
  }
  
  document.addEventListener("DOMContentLoaded", animateCounters);
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  
  // ✨ Scroll Reveal for Timeline
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});
function scrollToSection(id) {
  const element = document.getElementById(id);
  const offset = 100; // navbar height
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const position = elementRect - bodyRect - offset;

  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}



// FORM SUBMIT TO GOOGLE SHEET
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzoo5sYr1CL9S5pijqC3a1M9T_bM8_QFp8tfUMFZundGzNJlEJtGgKyVpy_0B8AvMyYEg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Sending message...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent! Thank you.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// TIMELINE ANIMATION
const items = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
});
