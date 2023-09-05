export default function initAnimaNumeros() {
  function animaNumero() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((item) => {
      const total = +item.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);

      const timer = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 22 + Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumero();
    }
  }

  observer = new MutationObserver(handleMutation);
  const sectionNumeros = document.querySelector('.numeros');

  observer.observe(sectionNumeros, { attributes: true });
}
