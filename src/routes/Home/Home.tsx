import React from "react";
import { useQuery, gql } from '@apollo/client';


import { Card, NewCard } from "../../components/index";

import { gardenAreas } from "./data"
import { CardContainer } from "./Home.style"

interface Area {
    id: number;
    name: string;
    location: string;
    area_type: string;
}

interface AreasData {
    areas: Area[];
}

const GET_ALL_AREAS = gql`
query GetAllAreas {
  areas {
    id
    name
    location
    area_type
  }
}
`;


const Home = (props: {}) => {
    const { loading, error, data } = useQuery<AreasData>(
        GET_ALL_AREAS, { fetchPolicy: 'no-cache' }
    );
    if (loading) return <p>Loading</p>;
    if (error) return <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
    ))}
    </pre>;
    if (!data) return <p>No Data</p>;
    return (
        <>
            {

                <>

                    <CardContainer>
                        {data && data.areas.map((result: any) => {
                            return (
                                <Card key={result.id} areaID={result.id} cardTitle={result.name} cardLocation={result.location} cardDescription={result.description} totalPlants={0} />
                            )
                        })
                        }
                    </CardContainer>
                </>
            };
        </>
    );
};

export default Home;
