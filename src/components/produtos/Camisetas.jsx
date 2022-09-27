/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditElement from '../Edit-element';
import { Content, ContainerShowProducts } from '../layout/Camisetas-styles';
import ModeloFilters from '../Modelo-filters';

export default function Camisetas({ filterRota }) 
{
    // Função de clicar para editar os grids dos cards
    const [clickEdit, setClickEdit] = useState(true)
    
    const clickGrid = () => setClickEdit(true)
    const clickLine = () => setClickEdit(false)

    // Função para renderizar os dados da "Camisetas"
    const [dataCamiseta, setDataCamiseta] = useState([])

    useEffect(() =>
    {
        axios.get("http://localhost:8888/api/v1/categories/1.json")
        .then(res => setDataCamiseta(res.data.items))
        .catch(err => console.log(err))
    }, [])

    // Funções para divisão de páginas
    const [itensPerPage, setItensPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(dataCamiseta.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex =  startIndex + itensPerPage;
    const currentItens = dataCamiseta.slice(startIndex, endIndex)

    // Função para filtrar as cores de "Camisetas"
    const [filterCamisetasColor, setFilterCamisetasColor] = useState([])

    const handleCamisetasColor = e =>
    {
        const searchWord = e.target.id
        const newFilter = dataCamiseta.filter(value =>
        {
            return value.color.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilterCamisetasColor(newFilter)
    }

    return (  
        <Content>
            <ModeloFilters filterRota={filterRota} filterColor={handleCamisetasColor} />

            <ContainerShowProducts>
                <section className="box-edit">
                    <EditElement onClickLine={clickLine} clickEdit={clickEdit} onClickGrid={clickGrid} filterRota={filterRota} />
                </section>

                {filterCamisetasColor.length !== 0 ? (
                    <section className={clickEdit ? 'container-camisetas bloco' : 'container-camisetas linha'}>
                        {filterCamisetasColor.map((item, key) =>
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
                    <section className={clickEdit ? 'container-camisetas bloco' : 'container-camisetas linha'}>
                        {currentItens.map((item, key) =>
                        {
                            return(
                                <section className='card' key={key}>
                                    <div className="box-image">
                                        <img src={require(`../images/${item.image}`)} />
                                    </div>
                                    <span className='container-infos-produto'>
                                    <h2>{item.name}</h2> 
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
                <div className='box-pages'>
                    {Array.from(Array(pages), (item, index) =>
                    {
                        return <button 
                            key={index}
                            value={index} 
                            style={index === currentPage ? {background: "#000", color: "#fff"} : null}
                            onClick={(e) => setCurrentPage(Number(e.target.value))}>
                            {index + 1}
                        </button>
                    })}
                </div>
            </ContainerShowProducts>
        </Content>
    )
}
