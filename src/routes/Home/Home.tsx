import React from "react";

import { Card } from "../../components/index";

import { gardenAreas } from "./data"
import { CardContainer } from "./Home.style"

const Home = (props: {}) => {
    return (
        <>
            <CardContainer>
                {
                    gardenAreas.map((data, key) => {
                        return (
                            <Card areaID={data.id} cardTitle={data.title} cardLocation={data.location} cardDescription={data.description} totalPlants={0} />
                        )
                    })
                }font-size: 3em;
            </CardContainer>
        </>
    );
}

export default Home;
