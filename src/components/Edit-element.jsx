import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Content } from './layout/Edit-element-styled';

export default function EditElement({ filterRota, onClickLine, onClickGrid }) 
{
    const [clickOrder, setClickOrder] = useState(false)

    const toggleOrder = () => setClickOrder(!clickOrder)

    const toggleSelectOrder = e =>
    {
        const searchWord = e.target.id
        document.getElementById('buttonOrder').innerHTML = searchWord;

        setClickOrder(!clickOrder)
    }

    return (
        <Content>
            <section className="container">
                <section className="box-title-page">
                    {filterRota.map((item, key) =>
                    {
                        return(
                            <Link to={`/${item.path}`} style={{color: "red"}} key={key} >
                                {item.name}
                            </Link>
                        )
                    })}
                </section>
                <section className="box-edit-container-products">
                    <div className="box-grids">
                        <i onClick={onClickGrid} className='bx bx-grid-alt' />
                        <i onClick={onClickLine} className='bx bx-list-ul' />
                    </div>
                    <div className="box-order">
                        <h2>Ordenar por:</h2>
                        <button id='buttonOrder' onClick={toggleOrder}></button>
                        <i className='bx bx-expand-vertical' />
                        
                        <ul className={clickOrder ? 'active' : ''}>
                            <li id='Preço' onClick={toggleSelectOrder}>Preço</li>
                            <li id='Recentes' onClick={toggleSelectOrder}>Recentes</li>
                            <li id='Lançamentos' onClick={toggleSelectOrder}>Lançamentos</li>
                        </ul>
                    </div>
                </section>
            </section>
        </Content>
    )
}
