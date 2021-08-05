import React,{ useState } from 'react';
import Axios from 'axios';
import './FirstPage.css';

function App() {

  const [city,setCity] = useState(null);
  const [feels_like,setFeels_like]= useState("");
  const [grand_level,setGrand_level]= useState("");
  const [humidity,setHumidity]= useState("");
  const [pressure,setPressure]= useState("");
  const [sea_level,setSea_level]= useState("");
  const [temp,setTemp] = useState("");

  function getCity(val){
    setCity(val.target.value)
  }

  const getWeather = () => {
    Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b539800a9533c16fa2372bd3ef96575b")
    .then(
      (response) =>{
      console.log(response);
      setFeels_like(response.data.main.feels_like+"");
      setGrand_level(response.data.main.grnd_level+"");
      setHumidity(response.data.main.humidity+"%");
      setPressure(response.data.main.pressure+"hPa");
      setSea_level(response.data.main.sea_level+"");
      setTemp(response.data.main.temp+"");
      }
    );

    console.log(city)
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <input className="inputText" type="text" onChange={getCity}/>
      <button className="button" onClick={getWeather}>Search</button>
      <form className="detailsForm">
        <div>City = {city}</div>
        <div>Feels like = {feels_like}</div>
        <div>grand_level = {grand_level}</div>
        <div>humidity = {humidity}</div>
        <div>pressure = {pressure}</div>
        <div>sea_level = {sea_level}</div>
        <div>temp = {temp}</div>
      </form>
      
    </div>
  );
}

export default App;
