import styled from "styled-components";


export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
gap: 1.5rem;
padding: 12rem;

`


export const GridItem = styled.div`
cursor: pointer;
text-align: center;
transition: transform 0.2s ease;

&:hover {
    transform: scale(1.05);
}

img {
    width: 100%;
    border-radius: 12px;
}

h3 {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #fff;
    
}


`


