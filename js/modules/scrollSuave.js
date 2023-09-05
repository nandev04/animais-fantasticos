export default function initScrollSuave() {
  const menuLinkInt = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  menuLinkInt.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}
