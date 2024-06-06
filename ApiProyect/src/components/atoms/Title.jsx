import styled from "styled-components";

const H1Styled = styled.h1`
    margin: 5px 0 0 5px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;

    &:hover{
        color: orange;
    }
`

function Title(props) {
    return <H1Styled>{props.text}</H1Styled>
}

export default Title