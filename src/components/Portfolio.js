import React from 'react'
import EachPortfolio from './EachPortfolio'

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: 'Fund Fortress Online Banking',
      desc: 'An emulation of an online banking with transaction functionalities',
      link: 'https://fund-fortress-frontend.vercel.app/',
      git: "https://github.com/toseth97/fund_fortress_frontend",
      back:"https://github.com/toseth97/I4G-FCMB"
    },

    {
      id: 2,
      title: 'IT Support Helpdesk',
      desc: 'This is a software that helps businesses provide technical support to employees and customers',
      link: 'https://it-support-ticket.pages.dev/', 
      git:"https://github.com/toseth97/it_support_ticket"

    },
    {
      id: 3,
      title: 'Simple NotePad',
      desc: 'A simple note pad where a user can have different note and each note can have multiple tabs. ',
      link: 'https://tobilobadevnote.onrender.com/',
      git:"https://github.com/toseth97/notePad"
    },
    
    {
      id:4 ,
      title: 'Intell Automated Solutions',
      desc: 'A clients Landing page',
      link:"https://www.intellautomatedsystems.com/#home",
      Git: 'https://github.com/toseth97/intellAuto/tree/main/frontend/intellauto'
    },
    {
      id: 5,
      title: 'HeCodes Commerce space',
      desc: 'A simple Ecommerce app with only frontend functionality',
      link: 'https://first-ecommerce-theta.vercel.app/'
    },
  ]
  return (
    <main className='Parent'>
      <div className='Yellow_bg bgd'></div>
      <div className='Black_bg bgd'></div>
      <div className='Black_slide bgd'></div>
      <div className='Container Block About_Container'>
      <section className='About_page flex flex-col items-center pt-8 pb-8'>
          <div className='w-full lg:w-10/12  rounded-lg bg-black'>
            <h1 className='text-center text-5xl font-bold py-4'>My Works</h1>
            <div className='flex flex-wrap justify-start gap-4 p-8'>
              {

                portfolio.map(item=><EachPortfolio item={item} />)
              }
            </div>
          </div>
          
      </section>
      
      </div>
      
  </main>
  )
}

export default Portfolio