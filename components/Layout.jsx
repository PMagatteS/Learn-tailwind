import React from 'react';
import Navbar from './Navbar';



const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div className='flex flex-col gap-8 my-40 px-16'>
            {children}
        </div>
        </>
    );
};

export default Layout;