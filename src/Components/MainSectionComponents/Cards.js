import React from 'react'
// import card1 from './card1.png'


const Cards = ({textValue}) => {
  return (
    <>
      <div className='p-[60px] bg-[#C4C4C466] flex justify-evenly m-[20px] items-center'>
        {/* <div className={`p-[30px] rounded-[5rem]`} style={{backgroundImage:'url("./card1.png")',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}></div> */}
        <div className='w-[300px]'><i className="fa-brands fa-facebook-f fa-xs"></i><span className='text-[#101010] text-[24px] ml-[10px]'>{textValue}</span></div>
      </div>
    </>
  )
}

export default Cards
