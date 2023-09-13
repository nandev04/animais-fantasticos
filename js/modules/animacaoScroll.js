import debounce from './debounce.js';

export default class AnimaScroll {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.6;

    // Faz o bind do checkDistance e usa o debounce
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distância de cada sessão em relação ao topo
  // e retorna o elemento com a distância do topo + área segura
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.windowMetade,
      };
    });
  }

  // Compara a distância e altera as classes
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  // Inicia a função
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Função para parar caso precise
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
