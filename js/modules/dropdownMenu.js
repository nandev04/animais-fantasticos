import outsideClick from './outsideClick.js';

export default function initDropdownMenu() {
  const liDropDown = document.querySelectorAll('[data-dropdown]');

  function activeDropDown(event) {
    event.preventDefault(liDropDown);
    this.classList.toggle('dropdown-ativo');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('dropdown-ativo');
    });
  }

  liDropDown.forEach((item) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      item.addEventListener(userEvent, activeDropDown);
    });
  });
}
