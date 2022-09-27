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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .box-edit 
    {
        width: 100%;
        margin: -15px 0 -20px -40px;
    }
    .box-links-diretos
    {
        min-height: 650px;
        width: 500px;
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        padding: 20px;

        ul 
        {
            li 
            {
                color: #888;
                font-size: 1rem;
                cursor: pointer;
                line-height: 25px;

                a 
                {
                    color: #888;
                    text-decoration: none;
                }
            }
        }
    }
`;