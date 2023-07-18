import React from 'react'
import Image from 'next/image'
import './style.css'

const MainNavigation = () => {
  return (
    <>
        <aside className='mainNavigation'>
            <h1 className='mainNavigation__title' >Modern interior</h1>
            <p className='mainNavigation__description'>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
            <div className='mainNavigation__info-container'>
                <span>Read more</span>
                <Image 
                    src='/images/arrow.svg'
                    width='20'
                    height='20'
                    alt='arrow'
                />
            </div>
        </aside>
    </>
  )
}

export default MainNavigation