import React from 'react';
//import { Link } from "gatsby";
import styled, { keyframes } from 'styled-components';
import {H1, MediumText} from '../styles/TextStyles';
import { themes } from '../styles/ColorStyles';
import PurchaseButton from '../buttons/PurchaseButton';
import MockupAnimation from '../animations/MockupAnimation'
import WaveBackground from '../backgrounds/WaveBackground';

function HeroSection(){
    return(
        <Wrapper>
        <WaveBackground />
            <ContentWrapper>
                <TextWrapper>
                <Title>Creating a better world </Title>
                <Description>through <span> design, code & magic </span> </Description>
                <PurchaseButton 
                    title= "Tell us about your Project"
                    subtitle= "Free Consultation"
                />
                </TextWrapper>
                <MockupAnimation />
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection;

const animation = keyframes`
    0%{opacity: 0; transform: translateY(-10px); filter: blur:(10px);}
    100%{ opacity: 1; transform: translateY(0px); filter: blur:(0px);}
`

const Wrapper = styled.div`
    /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
    overflow: hidden;
`;
const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;
    display: grid;
    grid-template-columns: 360px auto;

    @media (max-width: 450px){
        grid-template-columns: auto;
        gap: 60px;
        padding: 150px 20px 250px;
    }
`;

const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;

    > * {
        opacity: 0;
        animation: ${animation} 1s forwards;

        :nth-child(1){
            animation-delay: 0s;
        }
        :nth-child(2){
            animation-delay: 0.2s;
        }
        :nth-child(3){
            animation-delay: 0.4s;
        }

    }
`;

const Title = styled(H1)`
    color: ${themes.dark.text1};
    /*    opacity: 0;
        animation: ${animation} 1s .2s forwards; 
        */
    background: linear-gradient(180deg, #730040 0%, #301CBE 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media(max-width: 450px){
        font-size: 48px;
    }


`

const Description = styled(MediumText) `
    font-size: 18px;
    color: white;

    span {
        font-weight: 800;
        background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`