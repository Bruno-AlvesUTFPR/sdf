import React from 'react';
import { Link } from 'react-router-dom';
import { Content } from './layout/Modelo-filters';

export default function ModeloFilters({ filterTipos, filterColor, filterRota, handleClickRota, filterGender }) 
{
    return (
        <Content>
            <section className="container-show-rotes">
                <Link to="/">PÁGINA-INICIAL</Link>
                <span>|</span> 
                {filterRota.map((item, key) =>
                    {
                        return(
                            <Link to={`/${item.path}`} style={{color: 'red'}} key={key}>
                                {item.name}
                            </Link>
                        )
                    })}
            </section>
            <section className="container-filter">
                <h1>FILTRE POR</h1>
                <section className="box-categorias">
                    <h2>CATEGORIAS</h2>
                    <ul>
                        <li>
                            <Link onClick={handleClickRota} id='roupas' to="/roupas">Roupas</Link>
                        </li>
                        <li>
                            <Link onClick={handleClickRota} id='calçados' to="/sapatos">Sapatos</Link>
                        </li>
                        <li>
                            Acessórios
                        </li>
                    </ul>
                </section>
                <section className="box-cores">
                    <h2>CORES</h2>
                    <div className="types-cores">
                        <div id='vermelho' onClick={filterColor} style={{background: 'red'}} />
                        <div id='laranja' onClick={filterColor} style={{background: 'orange'}} />
                        <div id='azul' onClick={filterColor} style={{background: 'blue'}} />
                        <div id='preta' onClick={filterColor} style={{background: 'black'}} />
                        <div id='rosa' onClick={filterColor} style={{background: 'pink'}} />
                        <div id='amarela' onClick={filterColor} style={{background: 'yellow'}} />
                    </div>
                </section>
                <section className="box-tipo">
                    <h2>TIPO</h2>
                    <ul>
                        <li id='Corrida' onClick={filterTipos}>
                            Corrida
                        </li>
                        <li id='Caminhada' onClick={filterTipos}>
                            Caminhada
                        </li>
                        <li id='Casual' onClick={filterTipos}>
                            Casual
                        </li>
                        <li id='Social' onClick={filterTipos}> 
                            Social
                        </li>
                    </ul>
                </section>
                <section className="box-genero">
                    <h2>GÊNERO</h2>
                    <ul>
                        <li id='masculina' onClick={filterGender}>
                            Masculino
                        </li>
                        <li id='feminina' onClick={filterGender}>
                            Feminina
                        </li>
                    </ul>
                </section>
            </section>
        </Content>
    )
}
