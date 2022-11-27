import { useEffect, useState } from 'react';

import WidgetClimaHora from './components/WidgetTempo';
import Main from './components/Main';
import CityDate from './components/CityDate';
import Search from './components/Search';
import { geolocalizacao } from './utils/consumoClimaTempo';

function App() {
  // consumindo a API
  const dateHour = new Date();

  // variáveis para atualizarem os estados da aplicação
  // por ezempço, city é o estado atual, e setCity atualiza o estado atual quando uma cidade é pesquisada  
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(); // recebe os dados referente a cidade pesquisada pelo usuário
  const [menssageiro, setMensageiro] = useState(""); // exibe as messagens quando os dados estão sendo carregados e de quando a cidade n é encontrada

  // carrega a página com a localização atual do usuário
  const currentLocation = (lat, long) => {
    geolocalizacao(lat, long).then((response) => {
      setWeatherForecast(response);
    });
  };

  // solicita ao usuário para habilitar a localização atual do navegador para poder mostrar a previsão local 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      currentLocation(position.coords.latitude, position.coords.longitude);
    })
  }, []);

  return (
    <>
      <div className="App">
        <div className="container">
          {/* componente do campo de busca */}
          <Search
            cidade={city}
            setCidade={setCity}
            setMensagem={setMensageiro}
            setClimaPrincipal={setWeatherForecast}
          />

          {
            weatherForecast ? (
              <>
                {/* componente que apresenta o nome da cidade e a data e hora local */}
                <CityDate
                  name={weatherForecast.location.name}
                  region={weatherForecast.location.region}
                  date={dateHour.toLocaleDateString()}
                  time={dateHour.toLocaleTimeString()}
                />
                {/* componente principal que mostra as demais informações */}
                <Main
                  degrees={parseInt(weatherForecast.current.temp_c)}
                  img={weatherForecast.current.condition.icon}
                  condition={weatherForecast.current.condition.text}
                  max={parseInt(weatherForecast.forecast.forecastday[0].day.maxtemp_c)}
                  min={parseInt(weatherForecast.forecast.forecastday[0].day.mintemp_c)}
                  air={weatherForecast.current.wind_kph}
                  humidity={weatherForecast.current.humidity}
                />
              </>
            ) : null
          }
          {/* apresenta a msg de carregando quando está buscando a cidade */}
          <p className="loading">{menssageiro}</p>
        </div>
        <p className="about">Naum Santos Mourão | Site desenvolvido como teste para estágio na empresa <a href="https://wiseinovacao.com/">Wise Inovação</a></p>
      </div >
    </>
  );
}

export default App;
