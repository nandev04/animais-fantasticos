export default function initFetchBitcoin(url, spanArea) {
  async function fetchBTC() {
    try {
      const buscaBTC = await fetch(url);
      const btcJSON = await buscaBTC.json();
      const spanBTC = document.querySelector(spanArea);
      const bitcoinBRL = (1000 / btcJSON.BRL.sell).toFixed(4);

      spanBTC.innerText = bitcoinBRL;
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBTC();
}
