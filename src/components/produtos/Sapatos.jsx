/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Content, ContainerShowProducts } from '../layout/Sapatos-styled';
import EditElement from '../Edit-element';
import ModeloFilters from '../Modelo-filters';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Sapatos({ data, filterTipos, renderTipos, renderColor, filterColor, filterRota }) 
{
    // Função de clicar para editar os grids dos cards
    const [clickEdit, setClickEdit] = useState(true)
    
    const clickGrid = () => setClickEdit(true)
    const clickLine = () => setClickEdit(false)

    // Função para renderizar os dados da "Sapatos"
    const [dataSapato, setDataSapato] = useState([])
    useEffect(() =>
    {
        axios.get("http://localhost:8888/api/v1/categories/3.json")
        .then(res => setDataSapato(res.data.items))
        .catch(err => console.log(err))
    }, [])

    // Função para filtrar as cores de "Sapatos"
    const [filterSapatosColor, setfilterSapatosColor] = useState([])
    const handleSapatosColor = e =>
    {
        const searchWord = e.target.id
        const newFilter = dataSapato.filter(value =>
        {
            return value.color.toLowerCase().includes(searchWord.toLowerCase())
        })
        setfilterSapatosColor(newFilter)
    }

    const [filterTiposSapatos, setfilterTiposSapatos ] = useState([])
    const handleFitlerTipoSapatos = e =>
    {
        const searchWord = e.target.id
        console.log(searchWord)
        const newFilter = dataSapato.filter(value =>
        {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setfilterTiposSapatos(newFilter)
    }

    const [itensPerPage, setItensPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(dataSapato.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = dataSapato.slice(startIndex, endIndex)

    return (
        <Content>
            <ModeloFilters filterTipos={handleFitlerTipoSapatos} filterRota={filterRota} filterColor={handleSapatosColor} />

            <ContainerShowProducts>
                <div className="box-edit">
                    <EditElement onClickGrid={clickGrid} onClickLine={clickLine} filterRota={filterRota} />
                </div>

                {filterSapatosColor.length !== 0 || filterTiposSapatos.length !== 0 ? (
                    <section className={clickEdit ? 'container-sapatos bloco' : 'container-sapatos linha'}>
                        {filterSapatosColor.map((item, key) =>
                        {
                            return(
                                <section className='card' key={key}>
                                    <div className="box-image">
                                        <img src={require(`../images/${item.image}`)} />
                                    </div>
                                    <h2>{item.name}</h2> 
                                    <span className='container-infos-produto'>
                                        <span className='container-prices'>
                                            <p style={item.specialPrice ? {color: "#00000075", textDecoration: "line-through"} : {color: 'red'}}>
                                                R${item.price}
                                            </p>
                                            <p style={item.specialPrice ? {display: 'flex', color: 'red'} : {display: 'none'}}>
                                                R${item.specialPrice}
                                            </p>     
                                        </span>
                                        <Link to="">COMPRAR</Link>   
                                    </span>  
                                </section>
                            )
                        })}
                        {filterTiposSapatos.map((item, key) =>
                        {
                            return(
                                <section className='card' key={key}>
                                    <div className="box-image">
                                        <img src={require(`../images/${item.image}`)} />
                                    </div>
                                    <h2>{item.name}</h2> 
                                    <span className='container-infos-produto'>
                                        <span className='container-prices'>
                                            <p style={item.specialPrice ? {color: "#00000075", textDecoration: "line-through"} : {color: 'red'}}>
                                                R${item.price}
                                            </p>
                                            <p style={item.specialPrice ? {display: 'flex', color: 'red'} : {display: 'none'}}>
                                                R${item.specialPrice}
                                            </p>     
                                        </span>
                                        <Link to="">COMPRAR</Link>   
                                    </span>  
                                </section>
                            )
                        })}
                    </section>
                ) : (
                    <section className={clickEdit ? 'container-sapatos bloco' : 'container-sapatos linha'}>
                        {currentItens.map((item, key) =>
                        {
                            return(
                                <section className='card' key={key}>
                                    <div className="box-image">
                                        <img src={require(`../images/${item.image}`)} />
                                    </div>
                                    <h2>{item.name}</h2> 
                                    <span className='container-infos-produto'>
                                        <span className='container-prices'>
                                            <p style={item.specialPrice ? {color: "#00000075", textDecoration: "line-through"} : {color: 'red'}}>
                                                R${item.price}
                                            </p>
                                            <p style={item.specialPrice ? {display: 'flex', color: 'red'} : {display: 'none'}}>
                                                R${item.specialPrice}
                                            </p>     
                                        </span>
                                        <Link to="">COMPRAR</Link>   
                                    </span>  
                                </section>
                            )
                        })}
                    </section>
                )}
                <div className="box-pages">
                    {Array.from(Array(pages), (item, index) =>
                    {
                        return <button
                            key={index}
                            value={index}
                            onClick={e => setCurrentPage(Number(e.target.value))}
                            style={index === currentPage ? {background: "#000", color: "#fff"} : null}
                            >
                            {index + 1}
                        </button>
                    })}
                </div>
            </ContainerShowProducts>
        </Content>
    )
}
