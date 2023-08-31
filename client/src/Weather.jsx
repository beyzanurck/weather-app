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
    getDataApi()
    console.log(data)


  return (
    <div>
      <p>Test hello</p>
    </div>
  )
}
