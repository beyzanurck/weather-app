import React, { useState } from 'react';

export default function Weather() {

    const [data, setData] = useState({})
    const [input, setInput] = useState('')
    const [icon, setIcon] = useState(undefined)


    async function getDataApi() {

        const APIKEY = 'e5fc6a0c92924f00c736301b823f652e';
        const city = input;


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`);

        const data = await response.json();
        setData(data)

        if (data.weather && data.weather[0]) {
            const iconCode = data.weather[0].icon;
            setIcon(iconCode);
        }
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

        {(data !== undefined && data.main!== undefined) ? (
            <div>
                <p>
                    <span className="labels">City:</span> 
                    {data.name}, {data.sys && data.sys.country}
                </p>

                <p>
                    <span className="labels">Description:</span> 
                    {data.weather && data.weather[0] && data.weather[0].description}
                </p>

                {icon && <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />}

                <p>
                    <span className="labels">Temperature:</span> 
                    {data.main.temp}°F
                </p>

                <p>
                    <span className="labels">Feels Like: </span> 
                    {data.main.feels_like}°F
                </p>

            </div>
        ) : ` `} 
    </div>
  )
}
