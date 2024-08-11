import React from 'react'

const ServiceBox = ({title, description}:{title: string; description: string;}) => {
  return (
    <div className='bg-black-2 rounded-2xl p-6'>
        <h1 className='text-white-2 pb-2 font-bold'>{title}</h1>
        <p className='text-white-3'>{description}</p>
    </div>
  )
}

export default ServiceBox