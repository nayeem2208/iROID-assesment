import React from 'react'

function SolutionCards(props) {
  return (
    <div className='bg-neutral-50 ' >
      <img src={props.data.image} alt="" />
      <div className='flex flex-col justify-center items-center my-8'>
        <p className='text-lg'>{props.data.title}</p>
        <p className='text-sm'>{props.data.des}</p>
      </div>
    </div>
  )
}

export default SolutionCards
