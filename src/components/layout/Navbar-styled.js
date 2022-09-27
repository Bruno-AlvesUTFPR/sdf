import styled from "styled-components";

export const Content = styled.div`
    nav 
    {
        width: 100%;
        display: flex;
        flex-direction: column; 
    }
`;
export const ContainerHeader = styled.div`
    padding: 5px 10px;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: end;
    align-items: center;

    a 
    {
        color: #fff;
        font-weight: bold;
        margin: 5px;
    }
    @media (max-width: 650px)
    {
        font-size: .8rem;
    }
`;
export const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 980px;
    margin: auto;
    padding: 0 10px;

    .menu-icon 
    {
        display: none;
    }
    .logo  
    {
        img 
        {
            width: 100%;
        }
    }
    .box-search 
    {
        width: 300px;
        display: flex;

        input
        {
            width: 75%;
            padding: 10px 20px;
            outline: none;
        }
        button 
        {
            width: 25%;
            border: none;
            background-color: red;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
        }     
    }
    i 
    {
        display: none;
    }
    @media (max-width: 650px)
    {

        .logo 
        {
 
            img 
            {
                width: 150px;
            }
        }
        .menu-icon
        {
            display: flex;
            font-size: 1.5rem;
            z-index: 999;
        }
        .box-search.close
        {
            display: none;
        }
        .box-search.active 
        {
            position: absolute;
            width: 80%;
            right: 0;

            button 
            {
                display: none;
            }
        }
        i 
        {
            display: flex;
            font-size: 1.5rem;
            z-index: 777;
        }
    }
`;
export const ContainerFooter = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    background-color: red;
    
    .box-footer 
    {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 980px;
        padding: 15px;
        margin: auto;

        ul 
        {
            display: flex;
            align-items: center;
            list-style: none;
            z-index: 888;

            li 
            {
                margin: 20px;
                a
                {
                    text-decoration: none;
                    font-size: 1rem;
                    font-weight: bold;
                    color: #fff;
                }
            }
        }
    }
    @media (max-width: 650px)
    {
        background-color: transparent;

        .menu.open 
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-color: #fff;
             
            li 
            {
                a 
                {
                    color: #000;
                }
            }
        }
        .menu.close
        {
            display: none;
        }
    }
`;