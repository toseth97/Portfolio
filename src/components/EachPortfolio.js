import React from 'react'

const EachPortfolio = ({item}) => {
   const {img, title,desc,link} = item
  return (
    <div className='Each_portfolio'>
        <div className='Img_shade'></div>
        <img className='Portfolio_img' src={img} alt='projectImg'/>
        <div className='Portfolio_desc'>
            <h1>{title}</h1>
            <em>{desc}</em>
            <a href={link} target='_blank' rel="noreferrer">Visit Site</a>
        </div>
    </div>
  )
}

export default EachPortfolio