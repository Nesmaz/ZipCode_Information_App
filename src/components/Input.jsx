import React from 'react';

const Input = ({ value, onChange, onClick }) => {

  return (
    <div className='flex flex-col lg:flex-row items-center'>
      <input type="text" className='outline-none h-[2.5rem] py-1 px-2.5 text-[#262d69] font-bold rounded md:w-[270px] mb-[1rem] lg:mb-0' value={value} onChange={onChange} />
      <button className='bg-[#020F20] hover:bg-[#0f2849] text-white rounded ml-4 py-1 px-3 font-semibold w-fit h-[2.4rem] lg:mt-0 mt-[1rem] md:mt-[2rem]' onClick={onClick}>Search</button>
    </div>
  );
};

export default Input;
