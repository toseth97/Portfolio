import React from 'react'

const EachPortfolio = ({item}) => {
   const {title,desc,link, git} = item
  return (
    
        <div className='w-full md:w-1/2 lg:w-1/3 card_bg rounded p-4 text-black'>
            <h1 className='text-2xl font-bold text-black text-center'>{title}</h1>
            <p className='text-wrap text-sm text-black text-justify py-2'>{desc}</p>
            <div className='flex items-center justify-between'>
            <a href={link} target='_blank' rel="noreferrer" className=' my-2 text-black font-bold' >Visit Site</a>
            <a href={git} target='_blank' rel="noreferrer" className=' my-2 text-black font-bold' > Git repo</a>
            </div>
        </div>
    
  )
}

export default EachPortfolio