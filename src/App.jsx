import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [word, setWord] = useState('');
  const [url, setUrl] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setData(data);
      setWord(data.fact.split(' ')[0]);
    } catch (error) {
      console.error('Error al recuperar los datos:', error)
    }
  }

  const fetchCat = async () => {
    try {
      const fontSize = 70;
      const color = 'green';
      const url_cat = `https://cataas.com/cat/says/${word}?fontSize=${fontSize}&fontColor=${color}`;
      setUrl(url_cat);
    } catch (error) {
      console.error('Error al recuperar los datos:', error)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (word) {
      fetchCat();
    }
  }, [word]);

  return (
    <>
      <div className='h-72 w-72'>
        <a href="url" target="_blank" rel="noreferrer">
          <img width={288} src={url} className="logo" alt="Cat Picture" />
        </a>
      </div>
      <h1>Random Cat Facts</h1>
      <p>{data.fact}</p>
      <p>This fact has {data.length} characters</p>
      <p>The first word of this fact is: <strong>{word}</strong></p>
      <div className="card">
        <button onClick={() => fetchData()}>
          Reload
        </button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button id='reset' onClick={() => setCount(0)}>
          reset
        </button> */}
      </div>
    </>
  )
}

export default App
