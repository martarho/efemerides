import { gql } from '@apollo/client';

export const GET_ALL_AREAS = gql`
query GetAllAreas {
  areas {
    id
    name
    location
    area_type
  }
}
`;