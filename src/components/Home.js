import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <main className='Parent'>
        <div className='Yellow_bg bgd'></div>
        <div className='Black_bg bgd'></div>
        <div className='Black_slide bgd'></div>
        <div className='Container'>
            <img className='User_img' src='./tobi_test.png' alt='User' />
            <div className='Content'>
                <h1 className='Intro_name'>-  i'm tobiloba lawal</h1>
                <div className='Typewriter'>
                    <Typewriter
                    options={{
                    strings: ['Front-End Developer', 'Student @ ALX SE', 'Coding Enthusiast'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </div>
                <p>
                I'm a Nigerian-based web developer and front‑end engineer focused on creating clean and user‑friendly interfaces, I am enthusiastic about building great programming that improves the lives of everyone around me.
                </p>
                <div className='Btn'>
                    <div className='Flow'></div>
                    <p className='More_btn'> More about me</p>
                    <i className='bx bx-chevrons-right Link'></i>
                </div>
                
            </div>
        </div>

    </main>
  )
}

export default Home