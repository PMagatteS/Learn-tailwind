import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import {pages} from "../constant"
import Link from 'next/link'
import React, { useState } from 'react'
import {BsSunFill, BsMoonFill} from 'react-icons/bs'

const Drawer = ({toggle}) => {
    return(
        <>
        <div className="md:w-72 w-full h-screen absolute top-0 left-0 z-50 bg-teal-600">

            <div className="h-14 p-3 bg-teal-700">
                
            <BsChevronLeft className='ml-auto' onClick={toggle}/>
            </div>
        <div className="bg-inherit h-24 mt-12">
        <Link href='/'><div  className="p-2 text-xl w-full h-auto text-center hover:[&>*]:bg-teal-700 hover:[&>*]:opacity-100 [&>*]:opacity-80 [&>*]:cursor-pointer"><p>Home</p></div></Link>
    {pages.map((el, index) => (<Link href={el} key={index}><div  className="p-2 text-xl w-full h-auto text-center hover:[&>*]:bg-teal-700 hover:[&>*]:opacity-100 [&>*]:opacity-80 [&>*]:cursor-pointer"><p>{el.charAt(0).toUpperCase() + el.slice(1)}</p></div></Link>))}
       
        </div>
            
            
        </div>
        </>
    ) 
}

const Navbar = () => {
    const [openDrawer, setOpenDrawer] =  useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer) 
    }
    const [dark, setDark] = useState(false)
    const setDarkMode = () => {
            setDark((prviousState) => !prviousState)
            document.documentElement.classList.toggle('dark')
    }
    return (
        <div className="h-14 w-full bg-teal-800 flex items-center justify-between text-white text-xl fixed top-0 z-50">
            <BsChevronRight className='ml-2' onClick={toggleDrawer}/>
            {openDrawer&&<Drawer toggle={toggleDrawer}/>}
            {dark?<BsSunFill className='mr-2 text-2xl text-amber-400' onClick={setDarkMode}/>:<BsMoonFill className='mr-2 text-2xl text-sky-700' onClick={setDarkMode}/>}
        </div>
    );
};

export default Navbar;