'use client'

import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import './style.css'

const Navigation = () => {  
  const [mobileMenu, setMobileMenu] = useState(false);
  const links = [
    {
        id: 1,
        name: 'Home',
    },
    {
        id: 2,
        name: 'Collection',
    },
    {
        id: 3,
        name: 'About',
    },
    {
        id: 4,  
        name: 'Contact'
    }
  ];
  
  const openNavigator = () => { setMobileMenu( !mobileMenu ) }

  return (
    <>
        <nav className='navigator'>
            { mobileMenu && 
                <div className='navigator__expand-container'>
                    <FiX onClick={openNavigator} className='navigator__expand-logo'/>
                    <div className='navigator__links-container'>
                        <ul className='navigator__links' >
                            { links.map( (link) => <li key={link.id}><a>{link.name}</a></li> ) } 
                        </ul>
                    </div>
                </div>
            }
            <div className='navigator__container'>
                <span className='navigator__logo'>This interior</span>
                <FiMenu onClick={openNavigator} className='navigator__iconMenu'/>
                <ul className='navigator__links-web navigator__links' >
                    { links.map( (link) => <li key={link.id}><a>{link.name}</a></li> ) } 
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navigation