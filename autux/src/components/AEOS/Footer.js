import { Instagram, Link, Linkedin, Youtube } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='p-5  sm:p-10 border '>
        <div className='flex flex-wrap justify-between items-center'>
          <div>
            <img
              loading="lazy"
              src="https://autux.co/assets/images/logo/logo.png"
              alt=""
              className="navbar14_logo"
            />
          </div>
          <div className='social-media'>
            <div className='flex justify-start items-center gap-4'>
              <button className=''><Youtube color='white' /></button>
              <button className=''><Instagram color='white' width={20} /></button>
              <button className=''><Linkedin color='white' width={20} /></button>
              
              
              
              
              
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between items-center'>
          <div >
            <p className='text-[10px] text-white pl-7'>
              © AUTUX LTD. 2024
            </p>

          </div>
          <div className='flex justify-start items-center gap-4'>
            <a>
              <p className='text-[10px] text-white'>Terms & Conditions</p>
            </a>
            <>
              <p>
                •
                </p>
            </>
            <a>
              <p className='text-[10px] text-white'>
                Privacy Policy</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
