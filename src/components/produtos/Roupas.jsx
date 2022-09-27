/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import EditElement from '../Edit-element';
import { Content, ContainerShowProducts } from '../layout/Roupas-styled';
import ModeloFilters from '../Modelo-filters';

export default function Roupas({ filterRota, handleClickRota }) 
{
    return ( 
        <Content>
            <ModeloFilters handleClickRota={handleClickRota} filterRota={filterRota} />

            <ContainerShowProducts>
                <div className="box-edit">
                    <EditElement filterRota={filterRota} />
                </div>

                <div className="box-links-diretos">
                    <ul>
                        <li>
                            <Link id='camisetas' onClick={handleClickRota} to='/camisetas'>Camisetas</Link>
                        </li>
                        <li>
                            <Link id='calças' onClick={handleClickRota} to='/calcas'>Calças</Link>
                        </li>
                    </ul>
                </div>
            </ContainerShowProducts>
        </Content>
    )
}
