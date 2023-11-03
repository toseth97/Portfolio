import React from 'react'

const EachPortfolio = ({item}) => {
   const {title,desc,link, git} = item
  return (
    
        <div className='w-full md:w-1/2 lg:w-1/3 card_bg rounded-lg p-4'>
            <h1 className='text-2xl font-bold text-center  opacity-80'>{title}</h1>
            <p className='text-wrap text-sm text-justify py-2 opacity-80'>{desc}</p>
            <div className='flex items-center justify-between'>
            <a href={link} target='_blank' rel="noreferrer" className=' my-2 font-bold opacity-80' >Visit Site</a>
            <a href={git} target='_blank' rel="noreferrer" className=' my-2 font-bold opacity-80' > Git repo</a>
            </div>
        </div>
    
  )
}

export default EachPortfolio