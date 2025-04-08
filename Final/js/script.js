const button1 = document.getElementById("button1");
const paragraph1 = document.getElementById("button1p");

button1.addEventListener("click", function() {
  if (paragraph1.style.display === "none") {
    paragraph1.style.display = "block";
    button1.textContent = "Hide Info";
  } else {
    paragraph1.style.display = "none";
    button1.textContent = "Show More Info";
  }
});

const button2 = document.getElementById("button2");
const paragraph2 = document.getElementById("button2p");

button2.addEventListener("click", function() {
  if (paragraph2.style.display === "none") {
    paragraph2.style.display = "block";
    button2.textContent = "Hide Info";
  } else {
    paragraph2.style.display = "none";
    button2.textContent = "Show More Info";
  }
});

const button3 = document.getElementById("button3");
const paragraph3 = document.getElementById("button3p");

button3.addEventListener("click", function() {
  if (paragraph3.style.display === "none") {
    paragraph3.style.display = "block";
    button3.textContent = "Hide Info";
  } else {
    paragraph3.style.display = "none";
    button3.textContent = "Show More Info";
  }
});

