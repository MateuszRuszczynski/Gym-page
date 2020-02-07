const btn = document.querySelector('.btn--js');
btn.addEventListener('click', (e) => {
  const nav = document.querySelector('.navbar--js');
  nav.classList.toggle('navbar--visible');
})