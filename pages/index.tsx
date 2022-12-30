import Image from "next/image"

export default function Home() {
  return (
   <>
 <div className="w-72 h-80 bg-slate-50 rounded-md drop-shadow-md m-auto">
  <div className="w-16 h-16 relative rounded-full mx-auto my-2 ">
              <Image
              src="/images/profilepicture.jpg"
              className="rounded-full object-cover"
              fill={true}              
              alt=""
              />
              </div>

 </div>
   </>
  )
}
