import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0,0,0, 0.7);
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
  background: black;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  .close-button {
    position: absolute;
    top: 15px;
    right: 10px;
    
    border: none;
    color: white;
    font-size: 24px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
  }

  iframe {
    border: none;
  }
`;
