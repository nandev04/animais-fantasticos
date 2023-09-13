export default function initFetchBitcoin(url, spanArea) {
  async function fetchBTC() {
    try {
      // Faz o fetch do url passado nos parâmetros
      const buscaBTC = await fetch(url);
      const btcJSON = await buscaBTC.json();
      const bitcoinBRL = (1000 / btcJSON.BRL.sell).toFixed(4);
      const spanBTC = document.querySelector(spanArea);

      // Atribui um novo valor de innerText para o span
      spanBTC.innerText = bitcoinBRL;
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBTC();
}
