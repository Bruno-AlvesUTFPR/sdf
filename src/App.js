import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Nav & Foot/Navbar';
import Home from './components/Home';
import Camisetas from './components/produtos/Camisetas';
import Calcas from './components/produtos/Calcas';
import Sapatos from './components/produtos/Sapatos';
import Contato from './components/Contato';
import Footer from './components/Nav & Foot/Footer';
import Roupas from './components/produtos/Roupas';

export default function App() 
{
  // Função para renderizar os dados da "Rotas"
  const [dataRota, setDataRota] = useState([])

  useEffect(() =>
  {
      axios.get("http://localhost:8888/api/v1/categories/list.json")
      .then(res => setDataRota(res.data.items))
      .catch(err => console.log(err))
  }, [])

    // Função para filtrar as "Rotas"
  const [filterRota, setfilterRota] = useState([])
  const handleFilterRota = e =>
  {
      const searchWord = e.target.id
      const newFilter = dataRota.filter(value =>
      {
          return value.name.toLowerCase().includes(searchWord.toLowerCase())
      })
      setfilterRota(newFilter)
  }

  return (
    <BrowserRouter>
      <header>
        <Navbar handleClickRota={handleFilterRota} />
      </header>

      <main>
        <section className='container'>
          <Routes>
            <Route path="/" element={<Home handleClickRota={handleFilterRota} />} />
            <Route path="/camisetas" element={<Camisetas filterRota={filterRota} />} />
            <Route path="/calcas" element={<Calcas filterRota={filterRota} />} />
            <Route path="/sapatos" element={<Sapatos filterRota={filterRota} />} />
            <Route path="/roupas" element={<Roupas filterRota={filterRota} handleClickRota={handleFilterRota} />} />
            <Route path="/contato" element={<Contato />} /> 
          </Routes>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}