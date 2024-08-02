'use client'
import React, { useState } from 'react'
import { texts } from '../utils/info'
import { ChevronLeft,ChevronRight } from 'lucide-react'

function Reviews() {
    // type Num=0-2
    const [num,setNum]=useState(0)
    const [num2,setNum2]=useState(num + 1)
  console.log('====================================');
  console.log(num,num2);
  console.log('====================================');
 const display=texts.slice(num,num2)

const handleClick = (text:'dec'|'inc') => {
  if (text === 'inc') {
    if (num === 2) {
      setNum(0)      
      setNum2(1)      
      }
      else{
        setNum(num + 1)
        setNum2(num2 + 1)
      }
  }
  if (text === 'dec') {
    if (num === 0) {
    setNum(0)      
    setNum2(1)      
    }else{
      setNum(num - 1)
      setNum2(num2 - 1)
    }
  }
  
   
  }



  return (
    <section className='flex my-3'>
      <span onClick={()=>handleClick('dec')} className='flex hover:cursor-pointer justify-center items-center'><ChevronLeft/></span>
<div className='dark:bg-[#252525] p-3 rounded ' >{display}  </div>
<span onClick={()=>handleClick('inc')} className='flex hover:cursor-pointer  justify-center items-center'>{<ChevronRight/>}</span>
    </section>
  )
}

export default Reviews