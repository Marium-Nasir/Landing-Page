import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const MainNav = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <>
      <div className='lg:p-[30px] p-[10px]  bg-[#191919] flex justify-center lg:justify-between'>
        <div className='flex lg:justify-between'>
        <div className='p-[10px] bg-[white] text-[black] font-bold text-center'>PAASTEAMET</div>
        <div className='p-[10px] text-center text-[#9F9F9F]'>Politsei- ja Piirivalveamet </div>
        <div className='p-[10px] border-l-2 border-[#6F6F6F] text-[#9F9F9F]'>Transpordiamet</div>
        </div>
        {
           toggle?<AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-black z-50 text-2xl lg:hidden block'/>
           :<AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl lg:hidden block '/>
        }
        <div className='lg:flex mt-[12px] hidden'>
           <ul className='flex mr-[20px]'>
            <li className='text-[#F0F0F0]'>Miks see oluline on?</li>
            <li className='text-[#C8C8C8] md:ml-[15px]'>Mida sa öelda ja teha saad</li>
            <li className='text-[#C8C8C8] md:ml-[15px]'>Sinu suhe alkoholiga</li>
           </ul>
        </div>

          {/* Responsive Navbar */}
          <div className=''>
          <ul className={`duration-300 md:flex lg:hidden fixed top-[45px] bg-[gray] flex-col w-full h-full p-[60px] ${toggle?`left-[0]`:`left-[-100%]`}`}>
            <li className='text-black text-[25px]'>Miks see oluline on?</li>
            <li className='text-black text-[25px]'>Mida sa öelda ja teha saad</li>
            <li className='text-black text-[25px]'>Sinu suhe alkoholiga</li>
           </ul>
          </div>
      </div>
    </>
  )
}

export default MainNav
