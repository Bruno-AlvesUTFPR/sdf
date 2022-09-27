import styled from "styled-components";

export const Content = styled.div`
    .container
    {
        width: 100%;
        max-width: 980px;
        height: auto;
        padding: 57.5px 0 20px 0;
        display: flex;
        flex-direction: column;

        a 
        {
            text-decoration: none;
            font-size: 1rem;
            font-weight: bold;
        }
        .box-edit-container-products
        {
            border-top: .5px solid #aaaaaa65;
            border-bottom: .5px solid #aaaaaa65;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .box-grids 
            {
                i 
                {
                    color: black;
                    font-size: 1.5rem;
                    line-height: 50px;
                    margin: 0 5px;
                    cursor: pointer;
                }
                i.active 
                {
                    color: red;
                }
            }
            .box-order 
            {
                display: flex;
                gap: 10px;
                position: relative;
                align-items: center;

                button 
                {
                    width: 100px;
                    height: 20px;
                    padding: 3px;
                    background-color: transparent;
                    border: .5px solid #00000065;
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: bold;

                    i 
                    {
                        order: 1;
                    }
                }
                ul 
                {
                    display: none;
                }
                ul.active 
                {
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 21px;
                    right: 20px;
                    width: 100px;
                    font-size: .8rem;
                    background-color: #fff;
                    border: .5px solid #00000065;
                    list-style: none;
                    font-weight: bold;
                    align-items: center;
                    z-index: 888;

                    li 
                    {
                        cursor: pointer;
                        padding: 2px;
                    }
                }
            }
        }
    }
    @media (max-width: 450px)
    {
        .container 
        {
            .box-edit-container-products
            {
                border: none;
                margin: 0 0 20px 0;

                .box-grids 
                {
                    display: none;
                }
            }
        }
    }
`;