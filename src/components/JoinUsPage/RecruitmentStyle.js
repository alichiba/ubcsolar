import styled from 'styled-components';

export const RecruitmentContainer = styled.div`
    display: grid;
    grid-template-areas: "content image";
    grid-template-columns: 30% 70%;
    height: calc(100vh - 60px);
    width: 100%;

    @media screen and (max-width: 750px) {
        grid-template-areas: "content";
        grid-template-columns: 100%;
    }
`;

export const RecruitmentContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: calc(70vh - 60px);
    margin: 5vw;
`;

export const RecruitmentContentChild = styled.div`
    text-align: left;
`;

export const RecruitmentContentHeaderText = (props) => {
    return (
        <h1 style={{ margin: '0', fontSize: props.font }}>
            {props.text}
        </h1>
    );
};

export const RecruitmentContentParagraph = styled.div`
    font-size: 15px;
    margin-top: 7px;
`;

export const RecruitmentImageContainer = styled.div`
    max-height: 700px;
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

export const RecruitmentImage = styled.img`
    margin-top: auto;
    height: 90%;
    width: 90%;
    object-fit: cover;
    display: block;
`;

export const ButtonText = styled.p`
    font-size: 20px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: white;
`;

export const ButtonContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50px;
    background-color: #002145;
    color: #ffffff;
    border-radius: 30px;
`;

export const Button = (props) => {
    return (
        <ButtonContainer>
            <Link href={props.link} target="blank">
                <ButtonText>{props.buttonText}</ButtonText>
            </Link>
        </ButtonContainer>
    );
}

export const RecruitmentFAQContainer = styled.div`
    padding-top: 10vh;
    height: calc(100vh - 60px);
`;

export const FAQContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50vw);
    grid-template-rows: repeat(3, 25vh);
    align-items: center;
    
`;

export const FAQ = styled.div`
    margin: 0 auto;
    height: 10vh;
    width: 45vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;
    background: #002245;
    border-radius: 25px;
`