import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(button, list, classe) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.eventos = ['click', 'touchstart'];
    this.class = classe;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.class);
    this.menuButton.classList.add(this.class);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.class);
      this.menuButton.classList.remove(this.class);
    });
  }

  addEvent() {
    if (this.menuButton) {
      this.eventos.forEach((item) => this.menuButton.addEventListener(item, this.openMenu));
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }
  }
}
