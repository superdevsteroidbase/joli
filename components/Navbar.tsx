
"use client"
import React, { useState } from 'react';
import Link from "next/link"
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from "next/image"

const Navbar: React.FC = () => {
  let Links = [

    { name: "SERVICE", link: "#features" },
    { name: "Vision & Mission", link: "#mission" },
    { name: "CONTACT", link: "#contact" },
  ];
  let [open, setOpen] = useState<boolean>(false);

  return (
    <div className='shadow-md left-0'>
      <div className='md:flex items-end justify-between bg-white py-2 md:px-5 px-5'>
        <div className='font-bold text-2xl cursor-pointer flex items-end gap-1'>
          <Image src="/black-logo-removebg-preview.svg" width={60} height={0} alt="logo" />
        </div>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        <ul className={`flex-1 flex justify-center items-center gap-16 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {
            Links.map((link, index) => (
              <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a href={link.link} className='text-gray-800 hover:text-green-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          {/* <Link href="#contact">
            <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
