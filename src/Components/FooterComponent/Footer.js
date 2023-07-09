import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='p-[20px] w-full bg-black flex flex-wrap lg:flex-nowrap md:justify-center sm:justify-center  text-[#6F6F6F]'>
        <div className='p-[10px] lg:w-[600px] w-full  mt-[10px] flex flex-nowrap ml-[30px] lg:flex-row flex-col justify-between md:justify-center'>
            <div className='p-[10px]'>
                <p>Kampaania algatajad</p>
                <div className='p-[15px] mt-[15px] bg-[#6F6F6F] text-[black] font-bold text-center'>PAASTEAMET</div>
            </div>
            <div className='p-[10px] lg:text-center lg:mt-[70px]'>Politsei- ja Piirivalveamet </div>
            <div className='p-[10px] lg:mt-[80px] border-l-2 border-[#6F6F6F]'>Transpordiamet</div>
        </div>
        <div className='p-[10px] lg:w-[900px] w-full  mt-[10px] flex flex-nowrap ml-[30px] lg:flex-row flex-col justify-between md:justify-center'>
          <div className='mt-[20px]'>
            <p>www.paasteamet.ee</p>
            <p>www.transpordiamet.ee</p>
            <p>www.ppa.ee</p>
          </div>
          <div className='mt-[20px]'>
            <p>www.paasteamet.ee</p>
            <p>www.transpordiamet.ee</p>
            <p>www.ppa.ee</p>
          </div>
          <div className='mt-[20px]'>
            <p><i className="fa-brands fa-facebook-f fa-xs"></i><span className='ml-[5px]'>/Paasteamet</span></p>
            <p><i className="fa-brands fa-facebook-f fa-xs"></i><span className='ml-[5px]'>/Transpordiamet</span></p>
            <p><i className="fa-brands fa-facebook-f fa-xs"></i><span className='ml-[5px]'>/Politsei- ja Piirivalveamet</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
