import styled from "styled-components";
import Card from "../molecules/Card";
import { useState, useEffect } from "react";

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

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then(response => {
                if(response.ok){
                    return response.json();
                }
            })
            .then(data => {
                setObjects(data.items);
                console.log(data.items);
                
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <DivStyled>
            <SectionStyled>
                {objects.map(item =>
                    <Card
                        key={item.id}
                        name={item.name}
                        ki={item.ki}
                        maxKi={item.maxKi}
                        description={item.description}
                        src={item.image}
                        gender={item.gender}
                        race={item.race}
                    />
                )}
            </SectionStyled>
        </DivStyled>
    );
}

export default CardsSection;
