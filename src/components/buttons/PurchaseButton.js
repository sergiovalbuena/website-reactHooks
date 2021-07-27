import React from 'react';
import styled from 'styled-components';
import { Caption2, SmallText } from '../styles/TextStyles';
import { Link } from 'gatsby';

function PurchaseButton(props){
    const {title, subtitle} = props

    return(
        <Link to="/page-2">
        <Wrapper>
            <IconWrapper>
            <Icon src="/images/icons/credit.svg" />
            <Ring src ="/images/icons/icon-ring.svg" />
            </IconWrapper>
            <TextWrapper>
            <Title>{title || "Get Prop Access"}</Title>
            <Subtitle>{subtitle || "$29 per month"}</Subtitle>
            </TextWrapper>
        </Wrapper>
        </Link>
    )
}
/*
function PurchaseButton(props){
    return(
        <Wrapper>
            <Title>{props.title || "Get Prop Access"}</Title>
            <Subtitle>{props.subtitle || "$29 per month"}</Subtitle>
        </Wrapper>
    )
}
*/


export default PurchaseButton;

const Wrapper = styled.div`
    width: 280px;
    height: 77px;
    padding: 12px;
    background: linear-gradient(180deg, #FFF 0%, #d9dfff 100%);
    box-shadow: 0 1px 3px rgba(0,0,0,.1), 0px 20px 40px rgba(23,0,102,.2),inset 0 0 0 .5px rgba(255,255,255,.5);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 53px auto;
    align-items: center;
    gap: 20px
`
const TextWrapper = styled.div`
    display: grid;
    gap: 4px
`

const Title = styled(Caption2)`
    color: black;
`
const Subtitle = styled(SmallText)`
    color: black;
    opacity: .7;
`
const Icon = styled.img`
    height: 29px;
    width: 29px;
`;

const Ring = styled.img`
    position: absolute;
    top: -15px;
    left: -16px;
`

const IconWrapper = styled.div`
    width: 45px;
    height: 45px;
    background: linear-gradient(200.44deg, #4316db 13.5%, #9076e7 98.2%);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-content: center; 
    justify-self: center;
    position: relative;
`