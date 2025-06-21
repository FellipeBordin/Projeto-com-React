import styled,{keyframes} from "styled-components";
import 'swiper/css';


const fadeInUp = keyframes`

from {
    opacity: 0;
    transform: translateY(30px);
} to {
    opacity: 1;
    transform: rotateY(0);
}


`

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: transform 0.3s ease-in-out;
animation:${fadeInUp} 0.6 ease forwards;
 
img {
    border-radius: 30px;
    width: 300px;
    height: 100%;
}

h3 {
    color: white;
    margin-top: 15px;
}

`;