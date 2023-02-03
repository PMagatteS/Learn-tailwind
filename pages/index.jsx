import {pages} from '../constant'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
   <>
      <div className="w-full h-screen">
        {pages.map((el, index) => (
          <div key={index} className='w-2/3 h-5/6 bg-slate-100 mx-auto my-20 flex flex-col relative rounded'>
            <Link href={el}>
           <h2 className='text-2xl absolute -top-10 w-full bg-slate-100 text-emerald-900 shadow-lg pl-2 rounded'>{el}</h2>
            </Link>
            
          <div className="w-full h-full relative shadow-lg rounded">
            <Link href={el}>
            <Image src={'/images/'+el+'.svg'} alt={el} fill={true} className='rounded'>

            </Image>
            </Link>
          </div>
         </div>
        ))}
      </div>
   </>
  )
}
