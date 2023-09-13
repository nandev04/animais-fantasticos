import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor(targetDropdown, classList) {
    this.liDropDown = document.querySelectorAll(targetDropdown);
    this.events = ['click', 'touchstart'];
    this.classList = classList;

    this.activeDropDown = this.activeDropDown.bind(this);
  }

  activeDropDown(event) {
    event.preventDefault(this.liDropDown);
    event.currentTarget.classList.toggle(this.classList);
    outsideClick(event.currentTarget, this.events, () => {
      event.target.classList.remove(this.classList);
    });
  }

  addEvent() {
    this.liDropDown.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDown);
      });
    });
  }

  init() {
    if (this.liDropDown.length) {
      this.addEvent();
    }
    return this;
  }
}
