export default class AnimaScroll {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      window.addEventListener('scroll', this.animaScroll);
      this.animaScroll();
    }
  }
}
