'use client'
import Image from "next/image";
import logo from '@/Image/Layer_5.png'
import { Moon } from 'lucide-react'
import { useState } from "react";
import cn from 'classnames'

function Navbar() {

  return (
    <div className="flex justify-between mx-6 mt-3 dark"> <nav>
    <span className=" flex" >
      <Image src={logo} alt='logo'/>
      <b className="ml-2">Cloud</b>Ready
    </span>
  </nav>
  <div className="flex gap-4">
    <Moon/>
    <button className="">
      Login
    </button>
  </div></div>
  )
}

export default Navbar