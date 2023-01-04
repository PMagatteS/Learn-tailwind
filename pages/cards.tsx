import Image from "next/image"
import {AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai"
import {BsFillBookmarkHeartFill, BsFillShareFill} from 'react-icons/bs'

const user =  {
    name: "John D. Smith",
    username: "Jsmith",
    age: 26,
    email: "johnd@smith.me",
    profession: "Web Developer",
    descriptionCyan: "Full-stack web developer | <span class=\"text-inherit dark:text-cyan-500\">UI, UX mentor</span> | Author ",
    descriptionFuchsia: "Full-stack web developer | <span class=\"text-inherit dark:text-fuchsia-500\">UI, UX mentor</span> | Author ",
    phone: "213.043.5246",
    website: "jdsmith.dev",
    followers: 35.6,
    following: 1.2,
    visited: 382,    
    blogCardTitle: "Why developers are not happy...",
  }

const FirstProfileCard = () => {
    const cardStyle = {
        card:"w-72 h-80 text-slate-800 bg-slate-50 rounded-md drop-shadow-md m-auto flex flex-col gap-2 dark:text-slate-100 dark:bg-slate-800 border border-cyan-400 border-solid",
        cardImage:"w-16 h-16 relative rounded-full mx-auto my-2 cursor-pointer",
        image:"rounded-full object-cover",
        name:"font-bold text-center",
        profession:"text-center text-xs",
        email:"w-2/3 mx-auto text-center text-slate-200 text-sm rounded bg-cyan-600 dark:bg-cyan-300 dark:text-slate-800 cursor-pointer",
        description:"text-center px-4",
        icons:"flex gap-3 text-3xl text-cyan-600 justify-center dark:text-cyan-300 mt-auto mb-4 [&>*]:cursor-pointer",
    }
    return(
        <div className={cardStyle.card}>
  <div className={cardStyle.cardImage}>
              <Image
              src="/images/profilepicture.jpg"
              className={cardStyle.image}
              fill={true}              
              alt=""
              />
              </div>
              <h4 className={cardStyle.name}>{user.name}</h4>
              <h6 className={cardStyle.profession}>{user.profession}</h6>
              <h6 className={cardStyle.email}>{user.email}</h6>
              <h5 className={cardStyle.description} dangerouslySetInnerHTML={{__html: user.descriptionCyan}}></h5>
              <div className={cardStyle.icons}>
                <AiOutlineGithub/>
                <AiOutlineTwitter/>
                <AiOutlineInstagram/>
                <AiOutlineLinkedin/>
                <AiOutlineFacebook/>
              </div>


 </div>
    ) 
}

const SecondProfileCard = () => {
  const cardStyle = {
    card: "w-96 h-64 bg-slate-50 mx-auto drop-shadow-lg rounded-xl grid grid-cols-4 grid-rows-4 border border-fuchsia-900 border-solid dark:text-slate-100 dark:bg-slate-800",
    cardImage: "w-16 h-16 relative rounded-full mx-auto my-6 cursor-pointer row-span-4",
    image: "rounded-full object-cover",
    user: "col-span-3 mt-6",
    description: "col-span-3 text-left pr-4 pt-2",
    stats: "flex col-span-3 gap-2",
    buttons: "flex col-span-3 gap-4",
    followButton: "bg-fuchsia-700 text-purple-50 w-20 h-fit p-2 rounded border border-violet-200 border-solid",
    messageButton: "bg-zinc-900 text-purple-50 w-20 h-fit p-2 rounded border border-violet-200 border-solid",
  }
  const stats = []
  return(
    <div className={cardStyle.card}>
        <div className={cardStyle.cardImage}>
              <Image
              src="/images/profilepicture.jpg"
              className={cardStyle.image}
              fill={true}              
              alt=""
              />
              </div>
        <div className={cardStyle.user}>
          <h4>{user.name}</h4>
          <h6>@{user.username}</h6>
        </div>    
        <h6 className={cardStyle.description} dangerouslySetInnerHTML={{__html:user.descriptionFuchsia}}></h6>
        <div className={cardStyle.stats}>
          <div className="text-center">
            <h4 className="font-bold">
              {user.following}K
            </h4>
            <h6 className="text-sm">
              Following
            </h6>
          </div>
          <div className="text-center">
            <h4 className="font-bold">
              {user.followers}M
            </h4>
            <h6 className="text-sm">
              Followers
            </h6>
          </div>
          <div className="text-center">
            <h4 className="font-bold">
              {user.following}M
            </h4>
            <h6 className="text-sm">
              Views
            </h6>
          </div>
        </div>
        <div className={cardStyle.buttons}>
        <button className={cardStyle.followButton}>
          Follow
        </button>
        <button className={cardStyle.messageButton}>
          Message
        </button>
        </div>
    </div>
  )
}


import React from 'react';

const BlogCard = () => {
  return (
    <div className="dark:bg-slate-700 dark:text-gray-50 w-5/6 h-96 shadow-2xl mx-auto rounded-lg lg:w-1/2 ">
      <div className="w-full rounded-lg h-5/6 relative">
     <Image
              src="/images/profilepicture.jpg"
              className="object-cover center-image hover:object-left-top rounded-lg"
              fill={true}              
              alt=""
              />      
              </div>
    <div className="flex h-1/6 px-4">
      <h4 className="text-xl sm:text-2xl my-auto text-center mr-4">
        {user.blogCardTitle}
      </h4>
     <div className="flex gap-4 my-auto ml-auto text-2xl [&>*]:opacity-10 hover:[&>*]:opacity-100 hover:[&>*]:text-3xl [&>*]:cursor-pointer">
     <BsFillBookmarkHeartFill className="hover:text-pink-500"/>
      <BsFillShareFill className=""/>
     </div>
    </div>
    </div>
  );
};


  const cards = () => {
    return (
      <div className="flex flex-col gap-8 my-8">
   <FirstProfileCard/>
   <SecondProfileCard/>
   <BlogCard/>
      </div>
    );
  };
  
  export default cards;