import React from 'react';

const DisplayInfo = ({ zipCodeData }) => {
  return (
    <div className='text-[#020F20] font-bold mt-[20px] md:mt-[40px] lg:mt-[30px] min-w-[200px] lg:min-w-[360px] md:min-w-[270px] bg-white rounded p-[14px]'>
      <h3 className='mb-[5px]' >This Zip-code is located in:</h3>
      <p>City: {zipCodeData.city} </p>
      <p>State: {zipCodeData.state}</p>
      <p>Country: {zipCodeData.country_code}</p>
    </div>
  );
};

export default DisplayInfo;
