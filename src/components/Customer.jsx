import React from 'react'
import { customerData } from '../datas/customersData'
import CustomerCard from './CustomerCard'

function Customer() {
  return (
    <div className='mt-24 flex flex-col justify-center items-center mb-48 text-gray-800'>
      <p  className="font-semibold text-4xl ">Whats Our Coustomer Saying</p>
     <div className='flex mt-24'>
      {customerData.map((data,index)=>(
        <CustomerCard data={data} key={index}/>
      ))}</div>
    </div>
  )
}

export default Customer
