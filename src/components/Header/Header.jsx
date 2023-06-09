import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

        <img src="./image/andlogoweb.png" alt="logo" width={150} />

        <OutsideClickHandler
        onOutsideClick={()=> {
            setMenuOpened(false)
        }}
        >

        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}
        >
            <a href="">Home</a>
            <a href="">Portfolio</a>
            <a href="">Contact Me</a>
            <a href="">Biography</a>
            <button className='button'>
                <a href=''>Contact</a>
            </button>

        </div>

        </OutsideClickHandler>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30} />
    </div>

        </div>


    </section>
  )
}

export default Header