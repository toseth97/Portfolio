import React from 'react'

const About = () => {
    return (
        <main className='Parent'>
            <div className='Yellow_bg bgd'></div>
            <div className='Black_bg bgd'></div>
            <div className='Black_slide bgd'></div>
            <div className='Container Block About_Container'>
            <section className='About_page'>
                <div className='Resume_main About_sub'>
                    <div className='Resume_header'>
                        <div>
                            RESUME
                        </div>
                        <h1>ABOUT <span className='text_color'>ME</span></h1>
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
                                <h3>Education</h3>
                                <div>
                                    <div>
                                    <h5 className='font-bold'>Bachelor Degree - University of Ibadan - 2026</h5>
                                    <p className='text-xs'>Computer Science <em>(Currently running the program)</em></p>

                                    </div>

                                    <div className='text-start my-2'>
                            <h5 className='font-bold'>Google IT Support Specialist Certification - 2021</h5>
                                <p className='text-start'>Google / Coursera </p>
                            </div>
                            <div>
                            <h5 className='font-bold'>Javascript Datastructure and Algorithm - 2021</h5>
                                <p className='text-xs'>Freecodecamp</p>
                            </div>
                                    
                                </div>

                            </div>
                            
                        </div>
                        <a href='Tobiloba_cv.pdf' download='Tobiloba_cv.pdf'>
                            <div className='Btn Download'>
                            <div className='Flow'></div>
                            <p className='More_btn'>Download Resume</p>
                            <i className='bx bxs-download Link'></i>
                        </div>
                        </a>
                </div>
                
            </section>
            
            </div>
        </main>
    )
}

export default About