import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor(targetDropdown, classList, events) {
    this.liDropDown = document.querySelectorAll(targetDropdown);
    this.classList = classList;

    // Define argumento padrão para events
    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    // Faz o bind do activeDropDown
    this.activeDropDown = this.activeDropDown.bind(this);
  }

  // Previne o padrão e faz o toggle no currentTarget
  activeDropDown(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle(this.classList);
    outsideClick(event.currentTarget, this.events, () => {
      event.target.classList.remove(this.classList);
    });
  }

  // Adiciona cada evento em cada item do dropDown
  addEvent() {
    this.liDropDown.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDown);
      });
    });
  }

  // Inicia a função
  init() {
    if (this.liDropDown.length) {
      this.addEvent();
    }
    return this;
  }
}
