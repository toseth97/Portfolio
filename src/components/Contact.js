import React from 'react'
import Typewriter from 'typewriter-effect';

const Contact = () => {
  return (
    <main className='Contact_parent'>
        <div className='Black_slide bgd'></div>
        <div className='Contact_container'>
            <div className='Resume_header'>
                <div>
                    CONTACT
                </div>
                <h1>GET IN <span className='text_color'>TOUCH</span></h1>
            </div>
            <div className='Contact_body'>
                <div className='Contact_info'>
                    <h1>Don't be shy!</h1>
                    <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <section className="contact_section">
                        <div className='Mobile_info'>
                            <i className='bx bxs-phone info_icon'></i>
                            <div>
                                <h3>Call me</h3>
                                <em>+2348120272000 | +2348063860181</em>
                                
                            </div>
                        </div>
                        <div className='Mobile_info'>
                            <i class='bx bxs-envelope-open info_icon' ></i>
                            <div>
                                <h3>Mail me</h3>
                                <em>oluwasheun9721@gmail.com</em> 
                            </div>
                        </div>
                    </section>
                    <div className='Social_links'>
                        <a href=''><i className='bx bxl-github social' ></i></a>
                        <a href=''><i className='bx bxl-linkedin social' ></i></a>
                        <a href=''><i className='bx bxl-twitter social' ></i></a>
                        <a href=''><i className='bx bxl-whatsapp social' ></i></a>
                    </div>
                </div>
                <form className='Contact_mail'>
                    <div className='Form_div'>
                        <div className='Input_div'>
                            <label className='label' htmlFor='name'>Your Name</label>
                            <input id='name' type='text' required placeholder='Your Name'/>
                        </div>
                        <div className='Input_div'> 
                            <label className='label' htmlFor='email'>Your Email</label>
                            <input id='email' type='email' required placeholder='Your Email'/>
                        </div>
                    </div>
                    <div className='Input_div'>
                        <label className='label' htmlFor='subject'>Your Subject</label>
                        <input id='subject' type='text' placeholder='Your Subject'/>
                    </div>
                    <div className='Input_div textarea'>
                        <label className='label' htmlFor='message'>Your Name</label>
                        <textarea id='message' type='text' required placeholder='Your Message'/>
                    </div>
                    <div className='Btn Download'>
                            <div className='Flow'></div>
                            <p className='More_btn'>Send Message</p>
                            <i className='bx bxl-telegram Link' ></i>
                        </div>
                </form>
            </div>

        </div>
            
    </main>
  )
}

export default Contact