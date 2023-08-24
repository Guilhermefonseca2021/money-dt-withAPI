import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;

    img {
        width: 2.5rem;
        margin-right: .5rem;
    }
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    font-size: 2rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    padding: 0 .125rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
        background: ${props => props.theme['green-700']};
    }
`;