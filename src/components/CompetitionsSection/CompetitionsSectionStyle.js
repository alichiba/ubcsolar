import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const FadeInLeftDiv = styled.div`
  animation: 5s ${fadeInLeftAnimation};
`;

export const FadeInRightDiv = styled.div`
    animation: 5s ${fadeInRightAnimation};
`;

export const CompetitionContainer = styled.div`
    background: #002145;
    height: 900px;
    z-index: 5;
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        justify-content: start;
        flex-direction: column;
        height: 1000px;
    }

    @media screen and (max-width: 420px) {
        height: 800px;
    }
    
`;

export const CompetitionTextContainer = styled.div`
    height: 900px;
    width: 50vw;
    padding: 5vw;

    @media screen and (max-width: 1200px) {
        width: 90vw;
        height: 300px;
    }

    @media screen and (max-width: 420px) {
        width: 90vw;
        height: 600px;
    }
`;

export const CompetitionTextTitle = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
    margin-bottom: auto;
`;

export const CompetitionText = styled.p`
    font-size: 1rem;
    margin-bottom: auto;
`;

export const CompetitionMap = styled.div`
    width: 100vw;
    padding: 5vw;

    @media screen and (max-width: 1200px) {
        width: 90vw;
    }

    @media screen and (max-width: 420px) {
        
    }
`;