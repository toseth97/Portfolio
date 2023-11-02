import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import BG from "../imgs/BG.jpg"

const Home = () => {
    const [showAbout, setShowAbout] = useState(false)

    const showResume = ()=>{
        setShowAbout(!showAbout)
    }
    
  return (
    <main className='Parent'>
        <div className='Yellow_bg bgd'></div>
        <div className='Black_bg bgd'></div>
        <div className='Black_slide bgd'></div>
        <div className='Container Block'>
            <div className='Img_div'>
                <img className='User_img' src={BG} alt='User' />
            </div>
            <div className='Content'>
                <h1 className='Intro_name'>-  i'm tobiloba lawal</h1>
                <div className='Typewriter'>
                    <Typewriter
                    options={{
                    strings: ['Full Stack developer', 'Coding Enthusiast'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </div>
                <p>
                I'm a Nigerian-based Fullstack developer focused on creating clean and user‑friendly interfaces and a secure web applications, I am enthusiastic about building great programming that improves the lives of everyone around me.
                
                </p>
                <div className='Btn' onClick={()=>showResume()}>
                    <div className='Flow'></div>
                    <p className='More_btn'> More about me</p>
                    <i className='bx bx-chevrons-right Link'></i>
                </div>
                
            </div>
        </div>
        <section className={showAbout?'Home_resume active': 'Home_resume'}>
            <div className='Resume_main'>
                <i className='bx bx-x close' onClick={()=>showResume(false)}></i>
                    <div className='Resume_header'>
                        <div>
                            RESUME
                        </div>
                        <h1>ABOUT ME</h1>
                    </div>
                    <div className='Resume_split'>
                        <div className='Split_one split'>
                            <h3>Personal Info</h3>
                            <div className='Personal_info'>
                                <p className='title'>First Name: <span>Tobiloba</span></p>
                                <p className='title'>Last Name: <span>Lawal</span></p>
                                <p className='title'>Nationality: <span>Nigerian</span></p>
                                <p className='title'>Location: <span>Oyo State, Nigeria.</span></p>
                                <p className='title'>Phone No: <span>+234 8120272000</span></p>
                                <p className='title'>Email: <span>oluwasheun9721@gmail.com</span></p>
                                <p className='title'>Freelancing: <span>Available</span></p>
                                <p className='title'>Collaboration: <span>Available</span></p>
                            </div>
                        </div>
                        <div className='Split_two split'>
                            <h3>Skills</h3>
                            <div className='Skills_info'>
                                <i className='bx bxl-html5 html Icon_bg' ></i>
                                <i className='bx bxl-css3 css Icon_bg' ></i>
                                <i className='bx bxl-javascript js Icon_bg'></i>
                                <i className='bx bxl-react react Icon_bg' ></i>
                                <i class='bx bxl-nodejs node Icon_bg'></i>
                                <i class='bx bxl-mongodb node Icon_bg' ></i>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </main>
  )
}

export default Home