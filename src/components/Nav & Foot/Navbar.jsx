import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Content, ContainerHeader, 
    ContainerMain, ContainerFooter } from '../layout/Navbar-styled';
import webjumpLogo from '../images/webjumplogo.jpg';

export default function Navbar({ handleClickRota }) 
{
    const [clickIcon, setClickIcon] = useState(false)
    const [clickSearch, setClickSearch] = useState(false)

    const toggleIcon = () => setClickIcon(!clickIcon)
    const toggleSearch = () => setClickSearch(!clickSearch)

    return (
        <Content>
            <nav>
                <ContainerHeader>
                    <Link to="">Acesse sua conta</Link>  ou  <Link to="">Cadastre-se</Link>
                </ContainerHeader>

                <ContainerMain>
                    <section onClick={toggleIcon} className="menu-icon">
                        <i className={clickIcon ? 'fas fa-times' : 'fas fa-bars'} />
                    </section>

                    <Link className='logo' to="/">
                        <img src={webjumpLogo} alt="logo webjump" />
                    </Link>    

                    <div className={clickSearch ? 'box-search active' : 'box-search close'}>
                        <input type="text" />
                        <button type='button'>Buscar</button>
                    </div>
                    <i onClick={toggleSearch} className={clickSearch ? 'bx bx-x' : 'fas fa-search'} />
                </ContainerMain>

                <ContainerFooter>
                    <div className="box-footer">
                        <ul className={clickIcon ? 'menu open' : 'menu close'}>
                            <li>
                                <Link onClick={toggleIcon} to="/">PÁGINA INICIAL</Link>
                            </li>
                            <li onClick={toggleIcon}>
                                <Link onClick={handleClickRota} id='camisetas' to="/camisetas">CAMISETAS</Link>
                            </li>
                            <li onClick={toggleIcon}>
                                <Link onClick={handleClickRota} id='calças' to="/calcas">CALÇAS</Link>
                            </li>
                            <li onClick={toggleIcon}>
                                <Link onClick={handleClickRota} id='calçados' to="/sapatos">SAPATOS</Link>
                            </li>
                            <li onClick={toggleIcon}>
                                <Link onClick={toggleIcon} to="/contato">CONTATO</Link>
                            </li>
                        </ul>
                    </div>
                </ContainerFooter>
            </nav>
        </Content>
    )
}