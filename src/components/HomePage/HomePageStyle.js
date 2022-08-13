import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const HomeContainer = styled.div`
    
`;

export const HomeHeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroPhoto = styled.img`
    //Height is exact for fitting one section
    height: calc(100vh - 60px);
    width: 100%;
    object-fit: cover;
    overflow: auto;
`;

export const ArrowLevitate = styled(LinkScroll)`
    position: absolute;
    display: flex;    

    z-index: 5;
    color: #E5B13A;

    // Animation
    animation-name: ArrowLevitate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes ArrowLevitate {
        from { transform: translate(0, 0px);  }
        65%  { transform: translate(0, 15px); }
        to   { transform: translate(0,-0px);  }
    }
`;

export const HomeMottoContainer = styled.div`

`;

export const MottoYellowContainer = styled.div`
    background: rgba(229, 177, 58, 0.95);
    display: flex;
    justify-content: left;
    align-items: center;
    opacity: 85%;
    height: 15vw;
`;

export const MottoBlueContainer = styled.div`
    background: rgba(0, 33, 69, 0.95);
    display: flex;
    justify-content: right;
    align-items: center;
    opacity: 85%;
    height: 15vw;
`;

export const MottoYellow = styled.p`
    font-size: 5vw;
    font-weight: bold;
    color: #002145;
    opacity: 100%;
    text-align: left;
    padding-left: 5%;
`;

export const MottoBlue = styled.p`
    font-size: 5vw;
    font-weight: bold;
    color: #E5B13A;
    opacity: 100%;
    text-align: right;
    padding-right: 5%;
`;

export const Anchor = styled.div`
    display: block;
    position: relative;
    visibility: hidden;
    top: -60px;
`;

export const HomeMeetContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 120px);
    padding-right: 5vw;
    justify-content: space-between;
    align-items: center;
`;

export const MeetImageContainer = styled.img`
    width: 60vw;
    object-fit: cover;
    display: block;
    padding-left: 25px;
    height: 75vh;
    border-radius: 50px;
`;

export const MeetDescriptionContainer = styled.div`
    background: rgba(0, 33, 69, 0.75);
    padding: 2vw;
    width: 25%;
    height: 60vh;
    border-radius: 50px;
`;

export const HomeValuesContainer = styled.div`
    height: calc(100vh - 60px);
    transition: 1s ease-in;
`;

export const ValuesContainer = styled.div`
    display: grid;
    padding-top: 10vh;
    grid-template-columns: repeat(4, 25vw);
    grid-template-rows: repeat(1, calc(80vh - 60px));
    justify-content: center;
`;

export const LeadershipContainer = styled.div`
    background: rgba(0, 33, 69, 0.75);
    border-radius: 50px;
    width: 20vw;
    margin: 0 auto;
`;

export const Icon = styled.img`
    display: block;
    margin: 0 auto;
    marginTop: auto;
    marginBottom: auto;
    width: 35%; 

    transition: 1.5s;
    transition-timing-function: cubic-bezier(1,-0.12,.83,.67);
`;

export const SustainabilityContainer = styled.div`
    background: rgba(0, 33, 69, 0.75);
    border-radius: 50px;
    width: 20vw;
    margin: 0 auto;
`;

export const EducationContainer = styled.div`
    background: rgba(0, 33, 69, 0.75);
    border-radius: 50px;
    width: 20vw;
    margin: 0 auto;
`;

export const InnovationContainer = styled.div`
    background: rgba(0, 33, 69, 0.75);
    border-radius: 50px;
    width: 20vw;
    margin: 0 auto;
`;

export const HomeSponsorsContainer = styled.div`

`;

export const DiamondContainer = styled.div`
    border-top: 5px solid;
    border-color: #70D1F4;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 8vh;
`;

export const DiamondSponsors = styled.img`
    display: flex;
    justify-self: center;
    transition: 1s ease-in;
`;

export const GoldContainer = styled.div`
    border-top: 5px solid;
    border-color: #FFD700;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const GoldSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-template-rows: repeat(1, 25vh);
    align-items: center;
`;

export const GoldSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;
`;

export const SilverContainer = styled.div`
    border-top: 5px solid;
    border-color: #A9A9A9;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const SilverSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-template-rows: repeat(1, 25vh);
    align-items: center;
`;

export const SilverSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;
`;

export const BronzeContainer = styled.div`
    border-top: 5px solid;
    border-color: #CD7F32;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const BronzeSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-template-rows: repeat(1, 25vh);
    align-items: center;
`;

export const BronzeSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;
`;

export const SupporterContainer = styled.div`
    border-top: 5px solid;
    border-color: #000000;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const SupporterSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-template-rows: repeat(1, 25vh);
    align-items: center;
`;

export const SupporterSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;
`;



// export const AboutContainer = styled.div`
//     display: flex;
//     background: #002145;
//     height: 800px;
//     position: relative;
//     z-index: 5;
//     justify-content: center;
//     align-items: center;
//     padding: 1rem;
//     color: white;

//     @media screen and (max-width: 1200px) {
//         height: 1100px;
//     }

//     @media screen and (max-width: 420px) {
//         height: 1000px;
//     }
// `;
