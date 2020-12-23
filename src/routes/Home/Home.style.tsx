import styled from "styled-components";

const CardContainer = styled.div`
   position:absolute;
   top: 150px;
   left:0px;
   max-width: 100wv;
   height: 100hv;
   background: ${({ theme }) => theme.white};
   display:flex;
   flex-wrap:wrap;
   align-items: center;
   justify-content: center;
`


export { CardContainer }