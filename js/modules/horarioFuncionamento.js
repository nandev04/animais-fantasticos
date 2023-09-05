export default function initHorarioFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaFuncionamento = funcionamento.dataset.semana.split(',').map(Number);
  const horarioFuncionamento = funcionamento.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getUTCDay();
  const horaAgora = dataAgora.getUTCHours() - 3;

  if (diaAgora > 0 && diaAgora <= diaFuncionamento[4] && horaAgora >= horarioFuncionamento[0] && horaAgora < horarioFuncionamento[1]) {
    funcionamento.classList.add('aberto');
  }
}
