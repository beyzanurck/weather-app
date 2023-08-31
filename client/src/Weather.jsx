import React, { useState } from 'react';

export default function Weather() {

    const [data, setData] = useState({})
    const [input, setInput] = useState('')

    async function getDataApi() {

        const APIKEY = 'e5fc6a0c92924f00c736301b823f652e';
        const city = input;


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`);

        const data = await response.json();
        setData(data)

    }


  return (
    <div>
      <h1>Weather App</h1>

        <input 
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={getDataApi}>Get Data</button>

        <p>City: {data.name !== undefined ? data.name : ` `}, {( data.sys !==undefined && data.sys.country !== undefined) ? data.sys && data.sys.country : ` `}</p>

        <p>Description: {data.weather && data.weather[0] && data.weather[0].description}</p>

        <p>{data.weather && data.weather[0] && data.weather[0].icon}</p>

        <p>Temperature: { data.main !== undefined ? data.main.temp : ` `}</p>

        <p>Feels Like: {data.main !== undefined ? data.main.feels_like : ` ` }</p>
    </div>
  )
}
