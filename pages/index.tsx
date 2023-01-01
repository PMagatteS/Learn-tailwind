import Image from "next/image"
import {AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai"

const user =  {
    name: "John D. Smith",
    username: "Jsmith",
    age: 26,
    email: "johnd@smith.me",
    profession: "Web Developer",
    description: "Full-stack web developer | UI, UX mentor | Author ",
    phone: "213.043.5246",
    website: "jdsmith.dev",
    
  }

export default function Home() {
  return (
   <>
 <div className="w-72 h-80 bg-slate-50 rounded-md drop-shadow-md m-auto flex flex-col gap-2">
  <div className="w-16 h-16 relative rounded-full mx-auto my-2 ">
              <Image
              src="/images/profilepicture.jpg"
              className="rounded-full object-cover"
              fill={true}              
              alt=""
              />
              </div>
              <h4 className="font-bold text-center">{user.name}</h4>
              <h6 className="text-center text-xs">{user.profession}</h6>
              <h6 className="w-2/3 mx-auto text-center text-slate-200 text-sm rounded bg-cyan-600">{user.email}</h6>
              <h5 className="text-center px-4">{user.description}</h5>
              <div className="flex gap-3 text-3xl text-cyan-600 justify-center">
                <AiOutlineGithub/>
                <AiOutlineTwitter/>
                <AiOutlineInstagram/>
                <AiOutlineLinkedin/>
                <AiOutlineFacebook/>
              </div>


 </div>
   </>
  )
}
