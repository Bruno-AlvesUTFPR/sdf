import styled from "styled-components";

export const Content = styled.div`
    min-height: 650px;
    position: relative;

    .container-contatos
    {
        display: flex;
        width: 100%;
        max-width: 980px;
        margin: auto;
        padding: 0 10px;
        justify-content: center;

        .box-search-click
        {
            display: flex;
            flex-direction: column;
            width: 300px;
            height: 450px;
            align-items: center;
            padding: 10px 30px;
            position: relative;

            h1 
            {
                font-size: 2rem;
                text-align: center;
                margin: 0 0 20px 0;
            }
            ul 
            { 
                li 
                {
                    list-style: none;
                    text-align: center;
                    font-size: 1.2rem;
                    line-height: 30px;
                    cursor: pointer;
                }
            }
        }
        .box-all-contacts 
        {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            position: relative;
            align-items: center;

            .card 
            {
                width: 100%;
                min-height: 300px;
                margin: 0 0 20px 0;
                display: flex;
                flex-direction: column;
                position: relative;
                justify-content: space-between;
                background-color: #aaaaaa35;
                
                .box-logo 
                {
                    display: flex;
                    align-items: center;
                    font-weight: bold;

                    i 
                    {
                        font-size: 2rem;
                    }
                }
                p
                {
                    font-size: 1.2rem;
                    text-align: center;
                    word-break: break-all;
                    padding: 0 35px;
                }
                a 
                {
                    text-align: center;
                    padding: 15px 0;
                    text-decoration: none;
                    font-size: 1.2rem;
                    transition: .4s all ease;
                    color: #000;

                    &:hover 
                    {
                        background-color: #000;
                        color: #fff;
                    }
                }
            }
        }
    }
    @media (max-width: 650px)
    {
        .container-contatos
        {
            gap: 0;
            flex-wrap: wrap;

            .box-search-click
            {
                height: auto;
                width: 100%;
            }
            .box-all-contacts 
            {
                width: 100%;

                .card 
                {
                    p 
                    {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`;