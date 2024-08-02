import React from 'react'
import { Check } from 'lucide-react'

function Prices() {
  return (
    <section className='lg:flex lg:w-2/3 my-5 gap-4'>
        {/* Monthly */}
        <div className='lg:w-2/4 shadow-2xl border-textColor border px-4 py-3'>
            <h1 className='text-textColor text-xl font-bold'>Monthly</h1>
            <p className='mt-2 mb-5'>Gives you the most freedom. Perfect if you want to try the membership out.
            </p>

            <h2 className='text-xl font-bold'>$5,990 <span>/mo</span> </h2>
            <p className='mt-2 mb-5'>pause or cancel anytime</p>

            <button className='hover:cursor-pointer rounded w-full mt-2 mb-5 border-textColor border px-4 py-3'>
                Get Started
            </button>
            <h3>What’s included</h3>
            <ul>
                <li className='flex my-2 text-sm'> <Check size={20}/> Unlimited request</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Unlimited projects</li>
                <li className='flex my-2 text-sm'> <Check size={20}/> Unlimited users</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>1 CloudReady expert</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Shared Stack channel</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Pause or cancel anytime</li>
            </ul>
            </div>
            {/*  */}
        {/* Quarterly */}
        <div className='lg:w-2/4 max-sm:my-5 shadow-2xl dark:bg-[#252525] px-4 py-3'>
            <h1 className='text-textColor text-xl font-bold'>Quarterly</h1>
            <p className='mt-2 mb-5'>For companies of all sizes, who know what they need.
            </p>

            <h2 className='text-xl font-bold'>$5,490 <span>/mo</span> </h2>
            <p className='mt-2 mb-5'>pause or cancel anytime</p>

            <button className='hover:cursor-pointer bg-textColor rounded w-full mt-2 mb-5 px-4 py-3'>
                Get Started
            </button>
            <h3>What's included</h3>
            <ul>
                <li className='flex my-2 text-sm'> <Check size={20}/> Unlimited request</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Unlimited projects</li>
                <li className='flex my-2 text-sm'> <Check size={20}/> Unlimited users</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>1 CloudReady expert</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Shared Stack channel</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Pause or cancel anytime</li>
            </ul>
            </div>
            {/*  */}
        {/* Yearly */}
        <div className='lg:w-2/4  shadow-2xl dark:bg-[#252525] border-textColor border px-4 py-3'>
            <h1 className='text-textColor text-xl font-bold'>Yearly</h1>
            <p className='mt-2 mb-5'>The most cost-effective option. For a long-term relationship with us 🚀
            </p>

            <h2 className='text-xl font-bold'>$4,990 <span>/mo</span> </h2>
            <p className='mt-2 mb-5'>pause or cancel anytime</p>

            <button className='hover:cursor-pointer rounded w-full mt-2 mb-5 border-textColor border px-4 py-3'>
               Let's Talk
            </button>
            <h3>What’s included</h3>
            <ul>
                <li className='flex my-2 text-sm'> <Check size={20}/> Unlimited request</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Unlimited projects</li>
                <li className='flex my-2 text-sm'> <Check size={20}/> Unlimited users</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>1 CloudReady export</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Shared Stack channel</li>
                <li className='flex my-2 text-sm'> <Check size={20}/>Pause or cancel anytime</li>
            </ul>
            </div>
            {/*  */}
    </section>
  )
}

export default Prices