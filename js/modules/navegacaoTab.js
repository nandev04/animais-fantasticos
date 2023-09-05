export default class initTabNav {
  constructor(listaMenu, listaConteudo) {
  this.menu = document.querySelectorAll(listaMenu);
  this.content = document.querySelectorAll(listaConteudo);
  }

  activeTab(index) {
    this.content.forEach((item) => {
      item.classList.remove('ativo');
    });
    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add('ativo', direcao);
  }

  init() {
    if (this.content.length && this.menu.length) {
      this.content[0].classList.add('ativo');
  
      this.menu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          this.activeTab(index);
        });
      });
    }
  }
}
