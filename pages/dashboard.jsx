import React from 'react';
import {SimpleDrawer} from './drawers';


const dashboard = () => {
    return (
        <>
           <div className="w-screen h-screen flex shadow-2xl">
            <SimpleDrawer/>
            <div className="w-full h-full bg-slate-100"></div>
            </div> 
 
        </>
    );
};

export default dashboard;