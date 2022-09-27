import styled from "styled-components";

export const Content = styled.div`
    min-height: 650px;
    display: flex;
    gap: 20px;

    @media (max-width: 650px)
    {
        flex-direction: column;
    }
`;
export const ContainerShowProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 980px;
    margin: auto;
    padding: 0 10px;
    justify-content: center;
    
    .box-edit 
    {
        width: 100%;
        margin: -15px 0 -20px -40px;
    }
    .container-camisetas.bloco
    {
        min-height: 650px;
        width: 100%;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .card  
        {
            width: 200px;
            border: 1px solid #000;
            height: 270px;
            margin: 5px;
            border: none;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            text-align: center;
            transition: .3s all ease;

            img 
            {
                width: 100%;
                height: 150px;
            }
            h2
            {
                font-size: 1rem;
                height: 20px;
            }
            .container-infos-produto 
            {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: auto;
                height: 100px;
                padding: 10px;
                width: fit-content;
                justify-content: space-between;

                .container-prices
                {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    height: 40px;
                    align-items: center;

                    p 
                    {
                        font-size: 1rem;
                        font-weight: bold;
                    }
                }
                a 
                {
                    height: 40px;
                    text-decoration: none;
                    text-align: center;
                    font-size: 1.2rem;
                    background-color: #5f88e0c5;
                    padding: 5px 10px;
                    width: 155px;
                    color: #fff;
                    font-weight: bold;
                    border-radius: 5px;
                }
            }
            &:hover 
            {
                transform: scale(1.1);
                z-index: 777;
            }
        }
    }
    .container-camisetas.linha 
    {
        min-height: 650px;
        width: 100%;
        position: relative;
        display: flex;
        flex-wrap: wrap;

        .card 
        {
            width: 100%;
            border: 1px solid #000;
            height: 170px;
            margin: 5px;
            border: none;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            text-align: center;
            transition: .3s all ease;
            background-color: #fff;

            .box-image
            {
                width: 100%;
                img 
                {
                    width: 100px;
                    height: 90px;
                }
            }
            h2
            {
                font-size: 1rem;
                width: 100%;
            }
            .container-infos-produto 
            {
                justify-content: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin: auto;

                .container-prices
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;

                    p 
                    {
                        font-size: 1rem;
                        font-weight: bold;
                        line-height: 30px;
                    }
                }
                a 
                {
                    text-decoration: none;
                    text-align: center;
                    font-size: 1.2rem;
                    background-color: #5f88e0c5;
                    padding: 5px 10px;
                    color: #fff;
                    font-weight: bold;
                    border-radius: 5px;
                }
            }
            &:hover 
            {
                transform: scale(1.1);
                z-index: 777;
            }
        }
    }
    .box-pages 
    {
        button 
        {
            margin: 5px;
            border: .2px solid #000;
            background-color: transparent;
            padding: 5px 9px;
            cursor: pointer;
        }
    }
    @media (max-width: 550px)
    {
        .container-camisetas.linha
        {
            .card 
            {
                flex-direction: column;
                height: 270px;
                margin: 10px;

                img 
                {
                    height: 150px;
                }
                .container-infos-produto 
                {
                    flex-direction: column;

                    .container-prices
                    {
                        display: flex;
                        flex-direction: row;
                        gap: 10px;
                    }
                    a 
                    {
                        padding: 7px 15px;
                    }
                }
            }
        }
    }
`;