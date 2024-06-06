import styled from "styled-components";

const PStyled = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    color: #bebebe;
    margin-left: 5px;
    margin-top: 22px;
`

function SubInfo(props) {
    return <PStyled>{props.text}</PStyled>
}

export default SubInfo