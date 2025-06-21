import React from "react"
import Logo from "../../assets/Icon/android-chrome-512x512.png"



function Header() {
    return(
        <div>
           <img src={Logo} alt="logo-movies" style={{width: 500}} />
        </div>
    )
}


export default Header


