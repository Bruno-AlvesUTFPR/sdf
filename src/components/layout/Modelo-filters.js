import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 5px;

    .container-show-rotes 
    {
        line-height: 60px;
        font-weight: bold;
        font-size: .7rem;
        display: flex;
        align-items: center;
        gap: 5px;
        
        a 
        {
            text-decoration: none;
            color: #000;
        } 
        span 
        {
            color: red;
        }
    }
    .container-filter
    {
        width: 200px;
        height: 550px;
        border: .5px solid #aaaaaa65;
        padding: 10px;
        
        h1 
        {
            color: red;
            font-size: 1.5rem;
            font-weight: bold;
            line-height: 60px;
        }
        .box-categorias
        {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h2 
            {
                color: #777;
                line-height: 30px;
            }
            ul 
            {
                margin: 0 0 15px 17px;

                li 
                {
                    color: #888;      
                    font-size: 1rem;
                    cursor: pointer;
                    line-height: 25px;

                    a 
                    {
                        text-decoration: none;
                        color: #888;                     
                    }
                }
            }
        }
        .box-cores 
        {
            position: relative;
            h2 
            {
                line-height: 30px;
                color: #777;
            }
            .types-cores 
            {
                display: flex;
                flex-wrap: wrap;
                align-items: center;

                div 
                {
                    width: 30px;
                    height: 25px;
                    margin: 2px;
                    cursor: pointer;
                }
            }
        }
        .box-tipo
        {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h2 
            {
                color: #777;
                line-height: 50px;
            }
            ul 
            {
                margin: -10px 0 15px 17px;

                li 
                {
                    color: #888;
                    font-size: 1rem;
                    cursor: pointer;
                    line-height: 25px;
                }
            }
        }
        .box-genero
        {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h2 
            {
                color: #777;
                line-height: 50px;
            }
            ul 
            {
                margin: -10px 0 15px 17px;

                li 
                {
                    color: #888;
                    font-size: 1rem;
                    cursor: pointer;
                    line-height: 25px;
                }
            }
        }
    }
    @media (max-width: 650px) 
    {
        .container-filter
        {
            height: auto;
            width: 100%;
        }
    }
`;