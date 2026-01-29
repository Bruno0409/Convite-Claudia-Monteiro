/* SCROLL ANIMATION */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach((r) => observer.observe(r));

/* CONTAGEM REGRESSIVA */
const eventoData = new Date("2026-04-08T19:00:00").getTime();

function atualizarCountdown() {
  const agora = new Date().getTime();
  const diff = eventoData - agora;

  if (diff <= 0) return;

  document.getElementById("days").innerText = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );
  document.getElementById("hours").innerText = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );
  document.getElementById("minutes").innerText = Math.floor(
    (diff / (1000 * 60)) % 60
  );
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}

setInterval(atualizarCountdown, 1000);
