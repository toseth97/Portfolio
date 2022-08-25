import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='Navigation'>
        <ul className='Navigation_list'>
            
                <Link to='/'>
                    <div className='Nav_links'>
                            <i className='bx bxs-home Link_icon'></i>
                            <p className='Link_desc'>Home</p>
                    </div>
                </Link>

                    <Link to='/about'>
                        <div className='Nav_links'>
                                <i className='bx bxs-user Link_icon'></i>
                                <p className='Link_desc'>About</p>
                        </div>
                    </Link>
            
            
                    <Link to='/portfolio'>
                        <div className='Nav_links'>
                            <p className='Link_desc'>Portfolio</p>
                            <i className='bx bxs-briefcase Link_icon'></i>
                        </div>
                    </Link>

                    <Link to='contact'>
                        <div className='Nav_links'>
                            <p className='Link_desc'>Contact</p>
                            <i className='bx bxs-envelope-open Link_icon' ></i>
                        </div>
                    </Link>
            

        </ul>
    </nav>
  )
}

export default Navigation