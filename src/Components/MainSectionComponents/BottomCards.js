import React from 'react'
import Cards from './Cards'

const BottomCards = () => {
  return (
    <>
      <div className='p-[20px] bg-[#F5F5F5] text-[#101010]'>
        <h1 className='font-bold lg:text-[54px] text-center text-[34px] '>Jälgi meid Facebookis!</h1>
        <div className='p-[20px] flex lg:flex-nowrap flex-wrap justify-center  mt-[30px]'>
          <Cards textValue={'/Paasteamet'}/>
          <Cards textValue={'/Transpordiamet'}/>
          <Cards textValue={'/Politsei- ja Piirivalveamet'}/>
        </div>
      </div>
    </>
  )
}

export default BottomCards
