import React from 'react'
import EachPortfolio from './EachPortfolio'

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      img: 'ecomms.png',
      title: 'E-commerce website',
      desc: 'Order products from the comfort of your home',
      link: 'https://first-ecommerce-theta.vercel.app/'
    },
    {
      id: 2,
      img: 'inc_state.png',
      title: 'Income Statement',
      desc: 'Track all expense in line with your income',
      link: 'https://incomestatement-by-tobiloba.netlify.app/'
    },
    {
      id: 3,
      img: 'shoplify.png',
      title: 'Shoplify App',
      desc: 'Create a purchase list so that you won\'t forget things to buy',
      link: 'https://shoplify-by-tobiloba.netlify.app/'
    },
    {
      id: 4,
      img: 'thesis.png',
      title: 'Fellowship website',
      desc: 'Care to join our gathering?',
      link: 'https://thesssi.netlify.app/'
    },
  ]
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
                          WORKS
                      </div>
                      <h1>MY <span className='text_color'>PORTFOLIO</span></h1>
                  </div>
                  <div className='Portfolio_split'>
                    <div className='All_portfolio'>
                        {portfolio.map(item => <EachPortfolio item = {item} key = {item.id} />)}
                    </div>
                  </div>
                  
          </div>
          
      </section>
      
      </div>
      
  </main>
  )
}

export default Portfolio