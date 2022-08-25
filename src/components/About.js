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
                          </div>
                          <h3>Education</h3>
                          <h4>Bachelor Degree - University of Ibadan - 2026</h4>
                          <p>Computer Science <em>(Currently running the program)</em></p>
                      </div>
                  </div>
                  <a href='ss'>
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