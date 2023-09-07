export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos ao accordion
  addAcordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // Iniciar função
  init() {
    //Adicionar a classe ativo no primeiro item da accordion list
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0])
      this.addAcordionEvent();
    }
  }  
}
