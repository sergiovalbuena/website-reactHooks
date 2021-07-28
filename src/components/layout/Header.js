import { Link } from "gatsby";
import React from 'react';
import styled from "styled-components";
import {menuData} from '../../data/menuData';

export default function Header() {
    return(
        <Wrapper>
            <img src="/images/logos/logo.svg" alt="logo"/>
            <MenuWrapper>
            {menuData.map((item, index) =>(
                <Link to={item.link} key={index}>
                <MenuItem>
                <img src={item.icon} alt={item.title}/>
                {item.title}
                </MenuItem>
                </Link>
            ))}
            </MenuWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    position: absolute;
    width: 100%;
    top: 60px;
    display: grid; 
    grid-template-columns: 44px auto;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
`
const MenuWrapper = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(5, auto);
`
const MenuItem = styled.div`
    color: rgba(255,255,255,.7);
    display: grid;
    grid-template-columns: 24px auto;
    gap: 10px;
    align-items: center;
    padding: 10px;
    transition: .6s ease-out;

    :hover{
        background: rgba(255,255,255,.1);
        box-shadow: 
            0px 10px 20px rgba(0,0,0.1),
            inset 0 0 0 .5px rgba(255,255,255,.2);
        border-radius: 10px;

    }
`