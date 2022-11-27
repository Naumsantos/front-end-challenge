const baseURL = "http://api.weatherapi.com/v1/forecast.json";
const key = "b21ff113aed34a84aa2214715221411";
const lang = "pt";

// coleta os parametros das buscas e devolve o resultado em JSON
const coletaResultadoJSON = async (URL) => {
  let res = await fetch(URL);
  if (res.status === 200) {
    return res.json(); // retorna a resposta em JSON se o status da busca for 200;
  }
  return null;
}

// carrega a página de acordo com a cidade pesquisada
export const procuraCidade = async (city) => {
  // retorna a URL com o nome da cidade pesquisada
  return await coletaResultadoJSON(`${baseURL}?key=${key}&q=${city}&lang=${lang}`);
}

// carrega a página com a localização atual do usuário
export const geolocalizacao = async (lat, long) => {
  // retorna a URL com a localização atual do usuário
  return await coletaResultadoJSON(`${baseURL}?key=${key}&q=${lat},${long}&lang=${lang}`);
}