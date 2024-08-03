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

export const Faq = [{main:'What is a fractional CTO and how can CloudReady help?' ,sub:`A fractional CTO, or Chief Technology Officer, is a professional who provides technical leadership, guidance, and expertise to a company on a part-time or project-based basis, rather than as a full-time employee. This arrangement allows businesses, particularly startups and small to medium-sized enterprises, to benefit from the strategic insights and experience of a CTO without the cost and commitment associated with hiring a full-time executive.

CloudReady offers access to a network of highly skilled fractional CTOs who can help your business make informed decisions about technology strategy, software development, infrastructure management, and other technology-related aspects. Our experts work closely with your leadership and development teams to ensure the successful planning, execution, and delivery of software projects while maximizing efficiency, security, and scalability.

By partnering with CloudReady, you gain access to top-notch technical expertise tailored to your specific needs and goals. Our subscription-based model allows you to scale up or down as your needs change, giving you the flexibility to adjust your level of engagement with our expert team. Ultimately, this helps your business drive better results and stay competitive in the ever-evolving tech landscape.`}
,{main :`Why wouldn't I just hire a full-time CTO?`, sub :`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusantium esse dicta quaerat reprehenderit exercitationem omnis quasi, veritatis eligendi debitis quidem ipsum ea assumenda dolore corporis temporibus voluptatum deserunt nihil.
`}, {main :`Why do you price your work this way?`, sub:`
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusantium esse dicta quaerat reprehenderit exercitationem omnis quasi, veritatis eligendi debitis quidem ipsum ea assumenda dolore corporis temporibus voluptatum deserunt nihil.
  
  `},{main: `How do you match me with the right expert for my project?`,sub:`
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusantium esse dicta quaerat reprehenderit exercitationem omnis quasi, veritatis eligendi debitis quidem ipsum ea assumenda dolore corporis temporibus voluptatum deserunt nihil.
    
    `},
    {main:`How do you match me with the right expert for my project?`, sub:`
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusantium esse dicta quaerat reprehenderit exercitationem omnis quasi, veritatis eligendi debitis quidem ipsum ea assumenda dolore corporis temporibus voluptatum deserunt nihil.
      `

      },{main:`What industries or types of projects do you have experience with?`,sub:`
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusantium esse dicta quaerat reprehenderit exercitationem omnis quasi, veritatis eligendi debitis quidem ipsum ea assumenda dolore corporis temporibus voluptatum deserunt nihil.
        
        `},{main : `Do you offer UI/UX design or development services?`,sub:`
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusantium esse dicta quaerat reprehenderit exercitationem omnis quasi, veritatis eligendi debitis quidem ipsum ea assumenda dolore corporis temporibus voluptatum deserunt nihil.
          
          `}


]



  