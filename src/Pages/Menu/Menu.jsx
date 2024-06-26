import React from 'react'

import './Menu.css'


// images
import Logo from "../../assets/images/logo.svg";
import PlayerVsPlayerImage from "../../assets/images/player-vs-player.svg";

export default Menu = ()  => {
  return (
    <div className='parent-container'>
    <div id="menu-container">
    <div className="menu-header">
      <img alt="logo" src={Logo} width="52px" height="52px"></img>
    </div>

    <div className="menu-body">
      <Button
        bgColor={"#FFCE67"}
        textColor={"#000000"}
        hoverColor={"#5C2DD5"}
        icon={PlayerVsPlayerImage}
        text={"play vs player"}
      />
      <Button 
        bgColor={"#FFF"}
        textColor={"#000000"}
        hoverColor={""}
        text={"game rules"}/>
    </div>
  </div>
  </div>
  )
}
