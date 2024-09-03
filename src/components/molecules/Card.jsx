import styled from "styled-components";
import Text from "../atoms/Text";
import Image from "../atoms/Image"

const DivStyled = styled.div`
    background-color: #4c4d50;
    margin: 20px auto;
    width: 45%;
    display: flex;
    max-height: 280px;
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
            <Text text="Nombre"></Text>
            <Text text={props.name}></Text>
            <Text text="Genero"></Text>
            <Text text={props.gender}></Text>
            <Text text="Raza"></Text>
            <Text text={props.race}></Text>
            <Text text="Ki"></Text>
            <Text text={props.ki}></Text>
            <Text text="Ki máximo"></Text>
            <Text text={props.maxKi}></Text>
        </ContainerDataStyled>
    </DivStyled>
}

export default Card