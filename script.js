console.log("JS conectado");
// SCROLL SUAVE
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// MODAL
function openModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");

  console.log("Abriendo imagen:", src); // 👈 DEBUG

  modal.style.display = "flex";
  img.src = src;
}

// CERRAR
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// cerrar clickeando afuera
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-left');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});