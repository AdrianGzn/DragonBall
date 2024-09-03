import styled from "styled-components";

const PStyled = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    color: white;
    margin-left: 5px;
    margin-top: 0;

    &:hover{
        color: orange;
    }
`

function Text(props) {
    return <PStyled>{props.text}</PStyled>
}

export default Text