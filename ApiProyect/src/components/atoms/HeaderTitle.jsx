import styled from "styled-components";

const PStyled = styled.p`
    font-size: 90px;
    font-weight: 800;
`;

function HeaderTitle(props) {
    return <PStyled>{props.text}</PStyled>
}

export default HeaderTitle