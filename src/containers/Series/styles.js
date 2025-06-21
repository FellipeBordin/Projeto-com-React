import styled from "styled-components";

export const PageContainer = styled.div`
  padding-top: 120px;
  padding-inline: 2rem;
  min-height: 100vh;
  background-color: #000;
  color: white;
`;

export const SectionTitle = styled.h1`
margin-top: 150px;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  
  img {
    width: 100%;
    border-radius: 12px;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
  }
`;