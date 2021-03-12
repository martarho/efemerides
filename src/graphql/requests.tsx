import { useQuery } from "@apollo/react-hooks";
import { AreasData } from "./types";
import { DocumentNode } from "graphql";

export function getAllAreas(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<AreasData>(
        gqlQuery, { fetchPolicy: 'no-cache' }
    );
    return { loading, error, data }
}
