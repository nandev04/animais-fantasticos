export default class ScrollSuave {
  constructor(links, options){
    this.menuLinkInt = document.querySelectorAll(links);
    if(options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' }
    } else {
      this.options = options
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkInt() {
    this.menuLinkInt.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    this.addLinkInt();
    return this;    
  }
}
