/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import { Content } from './layout/Contato-styled';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contato() 
{
    const [dataContatos, setDataContatos] = useState([])
    const [filterContatos, setFilterContatos] = useState([])

    // Função para renderizar os dados da API
    useEffect(() =>
    {
        axios.get('http://localhost:8888/api/v1/categories/Contatos.json')
        .then(res => setDataContatos(res.data))
        .catch(err => console.log(err))
    }, [])

    // Função para filtrar os contatos
    const handleFilterContact = e =>
    {
        const searchWord = e.target.id
        const newFilter = dataContatos.filter(value =>
            {
                return value.name.toLowerCase().includes(searchWord.toLowerCase())
            })
        setFilterContatos(newFilter)
    }

    // Função para colocar duração no efeito de scroll com data-aos
    useEffect(() => Aos.init({ duration: 1000 }), [])

    return (
        <Content>
            <div className="container-contatos">
                <section data-aos="fade-right" className='box-search-click'>
                    <h1>Contatos</h1>
                    <ul>
                        <li onClick={handleFilterContact} id="linkedin">LinkedIn</li>
                        <li onClick={handleFilterContact} id="github">Github</li>
                        <li onClick={handleFilterContact} id="e-mail">E-mail</li>
                        <li onClick={handleFilterContact} id="instagram">Instagram</li>
                        <li onClick={handleFilterContact}>Mostrar tudo</li>
                    </ul>
                </section>

                {filterContatos.length !== 0 ? (
                        <section className='box-all-contacts'>
                            {filterContatos.map((item, key) =>
                            {
                                return(
                                    <section data-aos="fade-up" key={key} className="card">
                                        <div className='box-logo'>
                                            <i className={item.logo} />
                                            <h2>{item.name}</h2>
                                        </div>
                                        <p>{item.text}</p>
                                        <a target="_blank" href={item.url}>Acessar</a>
                                    </section>
                                )
                            })}
                        </section>
                    ) : (
                        <section className='box-all-contacts'>
                            {dataContatos.map((item, key) =>
                            {
                                return(
                                    <section data-aos="fade-up" key={key} className="card">
                                        <div className='box-logo'>
                                            <i className={item.logo} />
                                            <h2>{item.name}</h2>
                                        </div>
                                        <p>{item.text}</p>
                                        <a target="_blank" href={item.url}>Acessar</a>
                                    </section>
                                )
                            })}
                        </section>
                    )}
            </div>
        </Content>
    )
}
