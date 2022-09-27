import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Content } from './layout/Home-styled';
import { Previews } from './api-previews';

export default function Home({ handleClickRota }) 
{
    // Função para fazer a translação dos cards
    const [translateX, setTranslateX] = useState(0)

    const clickLeft = () =>
    {
        translateX === 0 ? setTranslateX(-100 * (Previews.length - 1)) : setTranslateX(translateX + 100)
    }
    const clickRight = () =>
    {
        translateX === -100*(Previews.length - 1) ? setTranslateX(0) : setTranslateX(translateX - 100)
    }
    
    return (
        <Content> 
            
            <div className="container-home">
                <div className='box-anchors'>
                    <ul>
                        <li> 
                            <Link to="/">Página Inicial</Link>
                        </li>
                        <li>
                            <Link onClick={handleClickRota} id='camisetas' to="/camisetas">Camisetas</Link>
                        </li>
                        <li>
                            <Link onClick={handleClickRota} id='calças' to="/calcas">Calças</Link>
                        </li> 
                        <li>
                            <Link onClick={handleClickRota} id='calçados' to="/sapatos">Sapatos</Link>
                        </li>
                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>
                <div className="box-apresentation">
                    <div className="box-previews">
                        {Previews.map((item, key) =>
                        {
                            return(
                                <div style={{transform: `translate(${translateX}%)`}} className='card' key={key}>
                                    <img src={item.src} />
                                    <h1>{item.name}</h1>
                                    <p style={item.specialPrice ? {color: "#aaa", textDecoration: "line-through"} : {color: "red"}}>
                                        R${item.price}
                                    </p>
                                    <p style={item.specialPrice ? {color: "red"} : {display: "none"}}>
                                        R${item.specialPrice}
                                    </p>
                                </div>
                            )
                        })}
                        <button id='buttonLeft' onClick={clickLeft}>
                            <i className='fas fa-arrow-left' />
                        </button>
                        <button id='buttonRight' onClick={clickRight}>
                            <i className='fas fa-arrow-right' />
                        </button>
                    </div>
                    
                    <div className="box-text">
                        <h1>Seja bem-vindo(a)!</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </Content>
    )
}
