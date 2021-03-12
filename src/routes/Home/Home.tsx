import React from "react";
import { useQuery, gql } from '@apollo/client';
import { Card } from "../../components/index";
import { gardenAreas } from "./data"
import { CardContainer } from "./Home.style"
import { getAllAreas } from "../../graphql/requests"
import { GET_ALL_AREAS } from "../../graphql/queries"

const Home = (props: {}) => {
    const { loading, error, data } = getAllAreas(GET_ALL_AREAS);
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
