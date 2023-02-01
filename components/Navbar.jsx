import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import {pages} from "../constant"
import Link from 'next/link'
import { useState } from 'react'


const Drawer = ({toggle}) => {
    return(
        <>
        <div className="w-72 h-screen absolute top-0 left-0 z-50 bg-teal-600">

            <div className="h-14 p-3 bg-teal-700">
                
            <BsChevronLeft className='ml-auto' onClick={toggle}/>
            </div>
        <div className="bg-inherit h-24 mt-12">
        <Link href='/'><div  className="p-2 text-xl w-full h-auto text-center hover:[&>*]:bg-teal-700 hover:[&>*]:opacity-100 [&>*]:opacity-80 [&>*]:cursor-pointer"><p>Home</p></div></Link>
    {pages.map((el, index) => (<Link href={el} key={index}><div  className="p-2 text-xl w-full h-auto text-center hover:[&>*]:bg-teal-700 hover:[&>*]:opacity-100 [&>*]:opacity-80 [&>*]:cursor-pointer"><p>{el.charAt(0).toUpperCase() + el.slice(1)}</p></div></Link>))}
        <button onClick={() => document.documentElement.classList.add('dark')}>dark</button>
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
    return (
        <div className="h-14 w-screen bg-teal-800 flex items-center text-white text-xl fixed top-0 z-50">
            <BsChevronRight className='mr-auto  ml-2' onClick={toggleDrawer}/>
            {openDrawer&&<Drawer toggle={toggleDrawer}/>}
        </div>
    );
};

export default Navbar;