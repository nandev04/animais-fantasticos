export default class ScrollSuave {
  constructor(links, options) {
    this.menuLinkInt = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // Realiza o scroll com base nas options
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  // Adiciona o evento para cada link interno
  addLinkInt() {
    this.menuLinkInt.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  // Inicia a função
  init() {
    this.addLinkInt();
    return this;
  }
}
