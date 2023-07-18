import React from 'react'
import './styles.css'
import Image from 'next/image'
import Photo1 from '../../public/images/photo1.png';
import Photo2 from '../../public/images/photo2.png';

const Information = () => {
  return (
    <aside className='information'>
        <Image   
            src={Photo1}
            alt="photo01"
            className='information__principal-image'
            
        />
        <div className='information__card'>
            <article className='information__card-container'>
                <Image 
                    src={Photo2}
                    alt='photo02'
                    className='information__card-avatar'
                />
                <span>Aliza Webber</span>
                <pre>Interior designer</pre>
                <p>Designed in 2020 by Aliza Webber</p>
            </article>
        </div>
    </aside>
  )
}

export default Information