import React from 'react';
import Image from 'next/image';
import {CgProfile} from 'react-icons/cg'

const DrawerContent = () => {
    const drawerElements = ["Profile", "Dashboard", "Feed", "Gallery", "Folders", "Parameters"]
    return(
        <>
            {drawerElements.map((el, i) => (<div key={i} className="p-2 text-xl text-inherit w-full h-auto text-center hover:[&>*]:bg-slate-500/20 hover:[&>*]:opacity-100 [&>*]:opacity-80 [&>*]:cursor-pointer"><div><div className='flex justify-center gap-4 w-fit pl-10'><CgProfile className='my-auto'/><p>{el}</p></div></div></div>))}
        </>
    ) 
}

const SimpleDrawer = () => {
    return(
        <div className="w-60 h-full bg-cyan-900 text-slate-200">
            <div className='border-b border-white/10 mb-8' >
                <h2 className='text-4xl text-white pl-2 py-4 '>
                    Drawer
                </h2>
            </div>
            <DrawerContent/>
        </div>
    ) 
}

const ProfileDrawer = () => {
    return(
        <div className='w-60 h-full bg-white'>
            <div className="w-full h-1/3 bg-cyan-900 mb-8 pt-6">
                <div className="w-14 h-14 relative rouded-full mx-auto">
                <Image
              src="/images/profilepicture.jpg"
              className="object-cover rounded-full"
              fill={true}
              alt=""
            />
                </div>

                <h2 className='text-center text-slate-200 py-4'>John D. Smith</h2>

            </div>

            <div className="text-cyan-900">
            <DrawerContent/>
            </div>
        </div>
    ) 
}

const drawer = () => {
    return (
        <div className='w-screen h-screen flex justify-center gap-10'>
            <SimpleDrawer/>
            <ProfileDrawer/>
        </div>
    );
};

export default drawer;