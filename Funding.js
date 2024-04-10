const area = document.querySelector('#chasis-area');
const button = document.querySelector('.chas_buton');

area.addEventListener('mouseover', () => {
  button.classList.add('show');
});

area.addEventListener('mouseout', () => {
  button.classList.remove('show');
});