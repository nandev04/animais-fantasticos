export default class TabNav {
  constructor(listaMenu, listaConteudo) {
    this.menu = document.querySelectorAll(listaMenu);
    this.content = document.querySelectorAll(listaConteudo);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com o index
  activeTab(index) {
    this.content.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos nas tabs
  addTabEvent() {
    this.menu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.content.length && this.menu.length) {
      // Ativar primeiro item
      this.activeTab(0);
      this.addTabEvent();
    }
    return this;
  }
}
