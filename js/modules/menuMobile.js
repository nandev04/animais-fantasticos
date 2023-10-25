import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(button, list, classe, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.class = classe;

    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.class);
    this.menuButton.classList.add(this.class);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.class);
      this.menuButton.classList.remove(this.class);
    });
  }

  addEvent() {
    this.events.forEach((item) => this.menuButton.addEventListener(item, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }
    return this;
  }
}
