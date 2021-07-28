import { Link } from "gatsby"
import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import {menuData} from '../../data/menuData';
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(event){
        setIsOpen(!isOpen)
        event.preventDefault()
    }

    return(
        <Wrapper >
            <Link to="/">
            <img src="/images/logos/logo.svg" alt="logo"/>
            </Link>
            <MenuWrapper count={menuData.length}>
            {menuData.map((item, index) => 
                item.link === "/account" ? (
                    <MenuButton 
                        item={item} 
                        key={index} 
                        onClick={(event)=> handleClick(event)}
                        />
                    ) : (
                <MenuButton item={item} key={index}/>
            ))}
            </MenuWrapper>
            <MenuTooltip isOpen={isOpen}/>
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
    grid-template-columns: repeat(${props=>props.count}, auto);
`
