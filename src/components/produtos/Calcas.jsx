/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EditElement from '../Edit-element';
import { Content, ContainerShowProducts } from '../layout/Calcas-styled';
import ModeloFilters from '../Modelo-filters';

export default function Calcas({ filterRota }) 
{
    // Função de clicar para editar os grids dos cards
    const [clickEdit, setClickEdit] = useState(true)
    
    const clickGrid = () => setClickEdit(true)
    const clickLine = () => setClickEdit(false)

    // Função para renderizar os dados da "Calças"
    const [dataCalca, setDataCalca] = useState([])
    useEffect(() =>
    {
        axios.get("http://localhost:8888/api/v1/categories/2.json")
        .then(res => setDataCalca(res.data.items))
        .catch(err => console.log(err))
    }, [])

    // Função para filtrar os gêneros de "Calças"
    const [filterGender, setFilterGender] = useState([])
    const handleGender = e =>
    {
        const searchWord = e.target.id
        const newFilter = dataCalca.filter(value =>
        {
            return value.gender.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilterGender(newFilter)
    }

    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(dataCalca.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = dataCalca.slice(startIndex, endIndex);

    return (
        <Content>
            <ModeloFilters filterGender={handleGender} filterRota={filterRota} />

            <ContainerShowProducts>
                <div className="box-edit">
                    <EditElement onClickGrid={clickGrid} onClickLine={clickLine} filterRota={filterRota} />
                </div>

                {filterGender.length !== 0 ? (
                    <section className={clickEdit ? 'container-calcas bloco' : 'container-calcas linha'}>
                        {filterGender.map((item, key) =>
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
                    <section className={clickEdit ? 'container-calcas bloco' : 'container-calcas linha'}>
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
