import React from 'react'
import { motion } from 'framer-motion'

function SolutionCards(props) {
  return (
    <div className='bg-neutral-50 overflow-hidden' >
      <motion.img whileHover={{scale:1.03}} src={props.data.image} alt="" />
      <div className='flex flex-col justify-center items-center my-8'>
        <motion.p whileHover={{scale:1.02,fontWeight:'600'}} className='text-lg'>{props.data.title}</motion.p>
        <motion.p whileHover={{fontWeight:'550'}} className='text-sm'>{props.data.des}</motion.p>
      </div>
    </div>
  )
}

export default SolutionCards
