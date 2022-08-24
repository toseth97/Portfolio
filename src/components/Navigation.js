import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='Navigation'>
        <ul className='Navigation__list'>
            
            <div className='Nav_links'>
                <p className='Link_desc'>Home</p>
                <Link to=''>
                    <i className='bx bxs-home Link_icon'></i>
                </Link>
            </div>

                <div className='Nav_links'>
                    <p className='Link_desc'>About</p>
                    <Link to=''>
                        <i className='bx bxs-user Link_icon'></i>
                    </Link>
                </div>
            
            
                <div className='Nav_links'>
                    <p className='Link_desc'>Portfolio</p>
                    <Link to=''>
                        <i className='bx bxs-briefcase Link_icon'></i>
                        </Link>
                </div>

                <div className='Nav_links'>
                    <p className='Link_desc'>Contact</p>
                    <Link to=''>
                        <i className='bx bxs-envelope-open Link_icon' ></i>
                    </Link>
                </div>
            

        </ul>
    </nav>
  )
}

export default Navigation