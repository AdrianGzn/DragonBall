import styled from "styled-components";
import HeaderTitle from "../atoms/HeaderTitle";

const HeaderStyled = styled.header`
    width: 100%;
    height: 40vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Header() {
    return <HeaderStyled>
        <HeaderTitle text="The Rick And Morty API"></HeaderTitle>
    </HeaderStyled>
}

export default Header