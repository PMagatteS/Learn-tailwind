import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { AiFillDashboard, AiFillFolder } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { MdRssFeed } from "react-icons/md";

const DrawerContent = () => {
  const drawerElements = [
    "Profile",
    "Dashboard",
    "Feed",
    "Gallery",
    "Folders",
    "Parameters",
  ];
  const icons = [
    <CgProfile key={1}/>,
    <AiFillDashboard key={2}/>,
    <MdRssFeed key={3}/>,
    <TfiGallery key={4}/>,
    <AiFillFolder key={5}/>,
    <BsFillGearFill key={6}/>,
  ];
  return (
    <>
      {drawerElements.map((el, i) => (
        <div
          key={i}
          className="p-2 text-xl text-inherit w-full h-auto text-center hover:[&>*]:bg-slate-500/20 hover:[&>*]:opacity-100 [&>*]:opacity-80 [&>*]:cursor-pointer"
        >
          <div>
            <div className="flex justify-center gap-4 w-fit pl-10 [&>svg]:my-auto">
               {icons[i]} 

              <p>{el}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const SimpleDrawer = () => {
  return (
    <div className="w-60 h-full bg-cyan-900 text-slate-200">
      <div className="border-b border-white/10 mb-8">
        <h2 className="text-4xl text-white pl-2 py-4 ">Drawer</h2>
      </div>
      <DrawerContent />
    </div>
  );
};

const ProfileDrawer = () => {
  return (
    <div className="w-60 h-full dark:bg-slate-700  bg-white">
      <div className="w-full h-1/3 bg-cyan-900 mb-8 pt-6">
        <div className="w-14 h-14 relative rouded-full mx-auto">
          <Image
            src="/images/profilepicture.jpg"
            className="object-cover rounded-full"
            fill={true}
            alt=""
          />
        </div>

        <h2 className="text-center text-slate-200 py-4">John D. Smith</h2>
      </div>

      <div className="dark:text-slate-200 text-cyan-900">
        <DrawerContent />
      </div>
    </div>
  );
};

const drawer = () => {
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center gap-10">
      <SimpleDrawer />
      <ProfileDrawer />
    </div>
  );
};

export default drawer;
