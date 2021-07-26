import React from 'react';
import styled from 'styled-components';
import { Caption2, SmallText } from '../styles/TextStyles';
import { Link } from 'gatsby';

function PurchaseButton(props){
    const {title, subtitle} = props

    return(
        <Link to="/page-2">
        <Wrapper>
            <Title>{title || "Get Prop Access"}</Title>
            <Subtitle>{subtitle || "$29 per month"}</Subtitle>
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
`

const Title = styled(Caption2)`
    color: black;
`
const Subtitle = styled(SmallText)`
    color: black;
    opacity: .7;
`