import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [test, setTest] = useState('')

  const getTestData = async () => {
    const response = await fetch('http://localhost:1001/api');
    const data = await response.json();
    console.log(data);
    setTest(data.message);
  };

  useEffect(() => {
    getTestData();
  }, [])
  

  return (
    <>
      <h1>Test for frontend</h1>
      {test}
    </>
  )
}

export default App
