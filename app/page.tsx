'use client'
import Image from "next/image";
import logo from '@/Image/Layer_5.png'
import { Moon,SunMoon } from 'lucide-react'
import { useState } from "react";
import cn from 'classnames'
import MainImg from '@/Image/Group_main.png'
import Logos from '@/Image/logos.png'
import MainImg2 from '@/Image/Group_2.png'
import { production, tech } from "./utils/info";
import Reviews from "./component/Reviews";
import Prices from "./component/Prices";

const illus =[{header: 'Technical Clarity',text:'Clear and concise technical guidance that helps you make informed decisions throughout the development process.'},
  {header:'Fewer Mistakes',text:'Expert oversight and guidance to reduce the risk of costly mistakes and errors that set back your development timeline.'},{
    header:'Ship Faster',
    text:'Identify bottlenecks and inefficiencies in your development process, optimise your workflows and accelerate your time to market.'
  }]

export default function Home() {
  const [Dark, setDark] = useState<Boolean>(true)
  return (
    <main className={cn('dark:bg-backgroundColorDark ',{"dark":Dark})}>
    <section className=" dark:text-white dark:bg-backgroundColorDark"> 
      <nav  className="flex justify-between px-6 pt-3">

    <span className=" flex" >
      <Image src={logo} alt='logo'/>
      <b className="ml-2">Cloud</b>Ready
    </span>
  
  <div className="flex gap-4">
  {Dark?  <SunMoon onClick={()=>setDark(!Dark)}/>:<Moon onClick={()=>setDark(!Dark)}/>}
    <button className="">
      Login
    </button>
  </div>
      </nav>
      {/*top buttom */}
      <div className=" flex flex-col justify-center px-6 items-center">

  <h2 className="text-textColor text-center text-2xl font-bold my-3 ">Expert Advice For Your Software Project</h2>
  <p className="text-center px-6">Get the best software development guidance from technical experts - for one fixed monthly fee.</p>
  <button className="px-6 py-3 my-4 bg-textColor rounded-md">
    See Plans
  </button>

  <Image src={MainImg} alt="mainImg"  className="w-10/12 lg:w-4/12 my-2" />
  <Image src={Logos} alt="logos"  className="mx-3 my-2" />

  <h2 className="text-textColor my3 text-2xl font-bold">Know the best way to build your application</h2>
  <p className="text-center">Get top-notch technical support for a fraction of the cost.</p>

  <div className="flex flex-col justify-center">
    {
      tech.map((item,index)=>{
        return(
          <div key={index} className="flex items-center justify-center my-2">
<Image src={item.image} alt='image'  />
<p> {item.text} </p>
          </div>
        )
      })
    }
  </div>

  {/* reviews  */}

  <Reviews/>
{/*  */}
  <section >
    <h2 className="text-textColor text-center text-2xl font-bold">A tech expert in your corner</h2>
<p className="text-center">Ship higher quality production software in less time.</p>

{/* illustration */}
<div className="flex flex-col mt-3 lg:px-52 lg:flex-row lg:w-full justify-center items-center">
<Image src={MainImg2} alt="second image" />
<div className="ml-5">
  {illus.map((item,index)=>{
    return (
      <div className="mb-3">
        <h2 className="text-xl font-bold">{item.header}</h2>
        <p>{item.text}</p>
      </div>
    )
  })}
</div>
</div>
{/*  */}
{/* Production */}
<section >
  <h2 className="text-textColor text-center text-2xl font-bold">With you from idea to production</h2>
<div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:px-52">
  { 
    production.map((item,index)=>{
      return (
        <div className=" flex gap-3 my-3 " key={index}>
          <Image src={item.image} alt="image" />
          <p> {item.text} </p>
        </div>
      )
    }) 
  }
</div>
</section>
{/*  */}
  </section>
  {/* price */}
<h2  className="text-textColor text-center text-2xl font-bold">For one fixed monthly fee</h2>
<p>Choose the plan that's right for you</p>

<Prices/>
<h1>FAQs</h1>
  <section >

  </section>
      </div>
  </section>
    </main>
  );
}
