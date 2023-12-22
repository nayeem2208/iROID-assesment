import React from 'react'
import { customerData } from '../datas/customersData'
import CustomerCard from './CustomerCard'
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";


function Customer() {
  return (
    <div className='mt-24 flex flex-col justify-center items-center mb-12 '>
      <p  className="font-semibold text-4xl ">Whats Our Coustomer Saying</p>
     <div className='flex mt-24'>
      {customerData.map((data,index)=>(
        <CustomerCard data={data} key={index}/>
      ))}</div>
      <div className='flex mt-8 mb-12'>
    <TfiArrowLeft className='w-8 h-8 mx-6' style={{color:'#FF4729'}}/>
    <div className='rounded-full mt-3 w-3 h-3 mx-1' style={{backgroundColor:'#FF4729',filter:'opacity(0.5)'}}></div>
    <div className='rounded-full mt-3 w-3 h-3 mx-1' style={{backgroundColor:'#FF4729',filter:'opacity(0.5)'}}></div>
    <div className='rounded-full  w-3 mt-3 h-3 mx-1' style={{backgroundColor:'#FF4729',filter:'opacity(0.5)'}}></div>
    <div className='rounded-full  w-3 h-3  mt-3 mx-1' style={{backgroundColor:'#FF4729',filter:'opacity(0.5)'}}></div>
    <TfiArrowRight className='w-8 h-8 mx-6' style={{color:'#FF4729'}}/></div>
    </div>
  )
}

export default Customer
