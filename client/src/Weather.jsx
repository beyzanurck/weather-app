import React, { useState } from 'react';

export default function Weather() {

    const [data, setData] = useState({})

    async function getDataApi() {

        const APIKEY = 'e5fc6a0c92924f00c736301b823f652e';
        const city = "Ames";


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`);

        const data = await response.json();
        setData(data)

        
    }
    console.log(data)


  return (
    <div>
      <h1>Weather App</h1>

        <button onClick={getDataApi}>Get Data</button>

        <p>{data.name}</p>
    </div>
  )
}
