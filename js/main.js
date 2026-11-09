// Menú mobile (aria-expanded / aria-controls) y modales de casos de estudio
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
function cerrarMenu() {
  menu.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
}
btn.addEventListener('click', () => {
  const abierto = menu.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', String(abierto));
});
menu.addEventListener('click', (e) => { if (e.target.closest('a')) cerrarMenu(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) { cerrarMenu(); btn.focus(); }
});
document.querySelectorAll('[data-dialog]').forEach((b) => {
  b.addEventListener('click', () => document.getElementById(b.dataset.dialog).showModal());
});
document.querySelectorAll('dialog').forEach((d) => {
  d.querySelector('.dialog-close').addEventListener('click', () => d.close());
  d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
});
