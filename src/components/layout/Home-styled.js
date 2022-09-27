import styled from "styled-components";

export const Content = styled.div`
    min-height: 875px;

    .container-home
    {
        display: flex;
        gap: 20px;

        .box-anchors
        {
            min-width: 250px;
            height: 400px;
            background-color: #E2DEDC;
            padding: 20px;

            ul 
            {
                li 
                {
                    a 
                    {
                        font-size: 1rem;
                        text-decoration: none;
                        color: #000;
                        font-weight: bold;
                        line-height: 30px;
                    }
                }
            }
        }
        .box-previews
        {
            display: flex;
            overflow: hidden;
            height: 300px;
            max-width: 980px;
            position: relative;
            margin: auto;
            align-items: center;

            .card 
            {
                min-width: 100%;
                height: 100%;
                position: relative;
                transition: .8s;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img 
                {
                    max-height: 55%;
                    max-width: 50%;
                    pointer-events: none;
                }
                p 
                {
                    font-size: 1rem;
                    z-index: 1;
                    font-weight: bold;
                }
            }
            #buttonLeft 
            {
                position: absolute;
                left: 0;
                font-size: 2rem;
                width: 50px;
                height: 100%;
                background-color: transparent;
                border: none;
                cursor: pointer;
                opacity: .2;
                transition: .4s;

                &:hover 
                {
                    background-color: #00000065;
                }
            }
            #buttonRight
            {
                position: absolute;
                right: 0;
                width: 50px;
                height: 100%;
                background-color: transparent;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                opacity: .2;
                transition: .4s;

                &:hover 
                {
                    background-color: #00000065;
                }
            }
        }
        .box-text 
        {
            width: 100%;
            margin: 20px 0;

            h1 
            {
                margin: 20px 0;
                font-weight: bold;
            }
            p 
            {
                width: 100%;
                font-size: 1rem;
                font-weight: bold;
            }
        }
    }
    @media (max-width: 650px)
    {
        .container-home
        {
            .box-anchors 
            {
                display: none;
            }
        }
    }
`;