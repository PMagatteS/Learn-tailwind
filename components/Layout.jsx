import React from 'react';
import Navbar from './Navbar';



const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div className='flex flex-col gap-8 my-12'>
            {children}
        </div>
        </>
    );
};

export default Layout;