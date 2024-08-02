import mouse from '@/Image/wired_mouce.png'
import Hands from '@/Image/handshake.png'
import rocket from '@/Image/rocket.png'
import Vector from '@/Image/Vector.png'
import Vector2 from '@/Image/Vector2.png'
import Vector3 from '@/Image/Vector3.png'
import Vector4 from '@/Image/Vector4.png'
import Vector5 from '@/Image/Vector5.png'
import Vector6 from '@/Image/Vector6.png'
import Vector7 from '@/Image/Vector7.png'
import Vector8 from '@/Image/Vector8.png'
import { StaticImageData } from "next/image";

type TechType={image:StaticImageData,text:string}

export const tech:TechType[]= [
  {image:mouse,text:'Select the plan thats right for your business.'}
  ,
  {image:Hands,text:'Get paired with an expert whose skills align with your needs.'}
  ,
  {image:rocket,text:'Leverage our expertise to ship better software, in less time.'}

]

export const texts:string[]= ['“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... “',
    '“Working with CloudReady has been a game changer for our business”',
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... “']

export const production:TechType[]= [  
  {image:Vector,text:'Designing software architecture for applications or systems'}
  ,
  {image:Vector2,text:'Making technical decisions to solve challenges and meet requirements'}
  ,
  {image:Vector3,text:'Ensuring software is secure, scalable, maintainable, and efficient'}
  ,
  {image:Vector4,text:'Ensuring software is secure, scalable, maintainable, and efficient'}
  ,
  {image:Vector5,text:'Managing technical risks and potential blockers for project success.'}
  ,
  {image:Vector6,text:'Providing technical leadership to team members'}
  ,
  {image:Vector7,text:'Staying current with emerging technologies and best practices'}
  ,
  {image:Vector8,text:'Ensuring compliance with industry or organisational standards'}
  ,
  
]






  