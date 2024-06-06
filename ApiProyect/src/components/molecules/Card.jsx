import styled from "styled-components";
import Image from "../atoms/Image"
import Info from "../atoms/Info"
import Point from "../atoms/Point"
import Title  from "../atoms/Title";
import SubInfo from "../atoms/SubInfo";

const DivStyled = styled.div`
    background-color: #4c4d50;
    border-radius: 8px;
    margin: 20px auto;
    width: 45%;
    display: flex;
    max-height: 225px;
`;

const ContainerImageStyled = styled.div`
    border-radius: 8px 0 0 8px;
    margin: 0;
    width: 230px;
    height: 100%;
`;

const ContainerDataStyled = styled.div`
    padding: 1%;
    border-radius: 8px;
    width: 60%;
`;

const SpanDivStyled = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
`;

function Card(props) {
    let color = "";

    switch(props.status){
        case "Alive":
            color = "green";
            break;
        case "unknown":
            color = "gray";
            break;
        case "Dead":
            color = "red";
            break;
        default:
            console.log("Estatus no encontrado");
    }

    return <DivStyled key={props.key}>
        <ContainerImageStyled>
        <Image src={props.src}></Image>
        </ContainerImageStyled>
        
        <ContainerDataStyled>
            <Title text={props.name}></Title>
            <SpanDivStyled>
                <Point color={color}></Point>
                <Info text={props.status}></Info>
                <Info text=" - "></Info>
                <Info text={props.species}></Info>
            </SpanDivStyled>
            <SubInfo text="Last know location:"></SubInfo>
            <Info text={props.origin}></Info>
            <SubInfo text="First see in:"></SubInfo>
            <Info text={props.location}></Info>
        </ContainerDataStyled>
    </DivStyled>
}

export default Card