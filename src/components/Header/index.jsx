import React, { useState } from "react";
import {Container, Menu, Li } from "./estyles"
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Icon/android-chrome-512x512.png"

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const {pathname} =useLocation()
    
    window.onscroll = () => {
        if ( !changeBackground && window.pageYOffset > 150) {
            setChangeBackground(true)
        }

        if (changeBackground && window.pageYOffset <= 150) {
            setChangeBackground(false)
        }
    }

    return (
        <Container $changeBackground={changeBackground}>
          <img src={Logo}  />
            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to="/filmes" >Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to="/series" >Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}



export default Header