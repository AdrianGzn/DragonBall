import styled from "styled-components";
import Card from "../molecules/Card";
import { useState } from "react";

const SectionStyled = styled.section`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
`;

const DivStyled = styled.div`
    background-color: #383838;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1%;
`;

function CardsSection() {
    const [objects, setObjects] = useState([]);

    if(true){
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then(data =>{
            setObjects(data.results);
        })
        .catch(error=> {
            console.log(error)
        })

    }

    return (
    <>
        <DivStyled>
                <SectionStyled>
                {
                    objects.map(item =>
                        <Card
                        key={item.name}
                        name={item.name}
                        src={item.image}
                        status={item.status}
                        species={item.species}
                        origin={item.origin.name}
                        location={item.location.name}
                        ></Card>
                    )
                }
                </SectionStyled>
        </DivStyled>
        </>
    )
}

export default CardsSection