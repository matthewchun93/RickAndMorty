import styled from "styled-components";


export const DescripSC = styled.div`
    position: fixed;
    margin-left: 56%;

`
export const ImageS = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`
export const DivSC2 = styled.div`
    background-color: black !important;
`
export const DivSC1 = styled.div`
    width: auto;
    background-color: transparent !important;
    /* background-image: url("./assets/ricknmorty.jpg"); */
    /* background-size: cover; */
;`

export const DivSC = styled.div`
    background-color: ${props => props.bgc || "transparent"};
    width: 400px;
    height: 400px;
    color: white;
`;

export const H1S = styled.h1`
    text-align: center;
    color: white;

`;

export const Paper = styled.div`
    background-color: paleturquoise;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    position: relative;
    height: ${props => props.height || "auto"};
    width: ${props => props.width || "auto"};
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    margin-top: 10px;
`;