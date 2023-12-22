import React from 'react'

function CustomerCard(props) {
    console.log(props)
  return (
    <div className='bg-red-500 h-96 w-96 mx-2'>
        <div>
      <img src={props.data.image} alt="" /></div>
    <p>{props.data.name}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
    </div>
  )
}

export default CustomerCard
