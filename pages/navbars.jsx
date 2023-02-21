import React from 'react';
import Image from 'next/image';
import {AiFillBell, AiFillMessage, AiOutlineUserAdd, AiOutlineMenu} from 'react-icons/ai'

const NavOptions = () => {
    return(
        <>
        <div className="md:flex hidden gap-4 w-fit hover:[&>*]:cursor-pointer ">
            <h4>Features</h4>
            <h4>Support</h4>
            <h4>pricing</h4>
        </div>
  
        </>
    ) 
}

const NavbarOne = () => {
    return(
        <div className="dark:bg-slate-700 dark:text-slate-200 flex items-center h-14 w-full bg-slate-100 shadow-lg  px-4">
            <h2 className='text-2xl'>Navbar</h2>

            <input type="search" className='dark:bg-slate-500 dark:text-slate-200 md:w-72 w-64 ml-2 rounded-lg md:ml-auto outline-teal-200 px-1 text-slate-700 text-opacity-50' />

            <div className="ml-6">
            <NavOptions/>
            <AiOutlineMenu className='md:hidden ml-auto'/>
            </div>
        </div>
    ) 
}
const NavbarTwo = () => {
    return(
        <div className="dark:bg-slate-700 dark:text-slate-200 flex items-center h-14 w-full bg-slate-100 shadow-lg  px-4">
            <h2 className='text-2xl'>Navbar</h2>
            <div className="ml-6">
            <NavOptions/>
            </div>
            <div className="hidden md:flex gap-4 ml-auto [&>*]:p-1">
                <button className='text-teal-600 rounded bg-white border-teal-600 border'>Login</button>
                <button className='bg-teal-600 rounded text-white'>Signup</button>
            </div>
            <AiOutlineMenu className='md:hidden ml-auto'/>
        </div>
    ) 
}
const NavbarThree = () => {
    return(
        <div className="dark:bg-slate-700 dark:text-slate-200 flex items-center h-14 w-full bg-slate-100 shadow-lg  px-4">
            <h2 className='text-2xl'>Navbar</h2>
            <div className="flex ml-auto mr-4">
                <div className="flex gap-4 mr-4 text-xl [&>*]:opacity-60 hover:[&>*]:text-teal-600 hover:[&>*]:opacity-100 my-auto">
                <AiOutlineUserAdd/>
                <AiFillMessage/>
                <AiFillBell/>
                </div>

                <div className="relative w-10 h-10 ">
            <Image
              src="/images/profilepicture.jpg"
              className="object-cover rounded-full"
              fill={true}
              alt=""
              />
              </div>
            <select className='bg-transparent text-sky-900 [&>*]:px-1 text-[0] [&>*]:text-base outline-none'>
                <option value="">Parameters</option>
                <option value="">Feed</option>
                <option value="">Groups</option>
                <option value="">Events</option>
                <option value="">Logout</option>
            </select>
            </div>
        </div>
    ) 
}

const navbars = () => {
    return (
        <div className='flex flex-col gap-8 px-16'>
            <NavbarOne/>
            <NavbarTwo/>
            <NavbarThree/>
        </div>
    );
};

export default navbars;