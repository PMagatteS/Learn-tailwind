import Image from "next/image"
import {AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai"

const user =  {
    name: "John D. Smith",
    username: "Jsmith",
    age: 26,
    email: "johnd@smith.me",
    profession: "Web Developer",
    description: "Full-stack web developer | <span class=\"text-inherit dark:text-cyan-500\">UI, UX mentor</span> | Author ",
    phone: "213.043.5246",
    website: "jdsmith.dev",
    
  }

const FirstCard = () => {
    const cardStyle = {
        card:"w-72 h-80 text-slate-800 bg-slate-50 rounded-md drop-shadow-md m-auto flex flex-col gap-2 dark:text-slate-100 dark:bg-slate-800 ",
        cardImage:"w-16 h-16 relative rounded-full mx-auto my-2 cursor-pointer",
        image:"rounded-full object-cover",
        name:"font-bold text-center",
        profession:"text-center text-xs",
        email:"w-2/3 mx-auto text-center text-slate-200 text-sm rounded bg-cyan-600 dark:bg-purple-300 dark:text-slate-800 cursor-pointer",
        description:"text-center px-4",
        icons:"flex gap-3 text-3xl text-cyan-600 justify-center dark:text-purple-300 mt-auto mb-4 [&>*]:cursor-pointer",
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
              <h5 className={cardStyle.description} dangerouslySetInnerHTML={{__html: user.description}}></h5>
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
  
  const cards = () => {
    return (
   <FirstCard/>
    );
  };
  
  export default cards;