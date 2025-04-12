'use client';
import React from 'react'
import CountUp from 'react-countup'


const AnimatedCounter = ({ amount } : { amount:number }) => {
  return (
    <div className='w-full'>
        {/* Below are features of Countup to make it Awesome */}
        <CountUp
        duration={2.75}
        decimals={2}
        decimal='.'
        prefix='$'
        end = {amount}/>
    </div>
  )
}

export default AnimatedCounter