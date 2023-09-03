import './App.css'
import Weather from './Weather';
import { useEffect, useState } from 'react'

function App() {

  const [test, setTest] = useState('')
  const [apiKey, setApiKey] = useState('');

  const getTestData = async () => {
    const response = await fetch('http://localhost:1001/api');
    const data = await response.json();
    setTest(data.message);
  };

  async function fetchApiKey() {
    const response = await fetch('http://localhost:1001/api/api-key'); 
    const data = await response.json();
    setApiKey(data.apiKey);
  }

  useEffect(() => {
    getTestData();
    fetchApiKey();
  }, [])
  

  return (
    <>
      {test}
      <Weather apiKey = {apiKey}/>
    </>
  )
}

export default App
