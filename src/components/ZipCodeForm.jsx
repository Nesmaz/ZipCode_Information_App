import React, { useState, Suspense, lazy } from 'react'
import axios from 'axios'
import Input from './Input.jsx';
import { waitForInfo, Loading } from './Loading.jsx'

const DisplayInfo = lazy(() => waitForInfo(import('./DisplayInfo.jsx')));

export default function ZipCodeForm(){

  const [zipCode, setZipCode] = useState('');
  const [zipCodeData, setZipCodeData] = useState(null);
  const [err, setErr] = useState('')
  const handleZipCodeChange = (e) => { setZipCode(e.target.value) };

  const getZipCodeInfo = async (code) => {
    const baseUrl = 'https://api.zipcodestack.com/v1/search?'
    const apiKey = process.env.REACT_APP_ZIP_CODE_API_KEY
    try {
      const res = await axios.get(`${baseUrl}codes=${code}&apikey=${apiKey}`);
      const zipCodeResult = res.data.results[code][0];
      (res.data.results[code][0].city &&
        res.data.results[code][0].state &&
        res.data.results[code][0].country_code) ? setZipCodeData(zipCodeResult) :
      setErr('Something went wrong. Please try again later.');
    } catch (err) {
      setZipCodeData(null);
      setErr('Please enter a valid zip code.');
      // console.error(err);
    }
  }
  const restart = ()=>{
    setZipCode('');
    setZipCodeData(null);
    setErr('')
  }
  return (
    <div id='zipform' className=" flex flex-col items-center w-[300px] md:w-[500px] rounded-3xl h-[70%] bg-slate-400/70  relative ">

      <h1 className='md:my-10 my-6 text-white lg:text-[2rem] md:text-[1.8rem] text-[1.4rem] text-bold'>Zip Code Information</h1>
      <Input value={zipCode} onChange={handleZipCodeChange} onClick={() => {getZipCodeInfo(zipCode)}} />

      <Suspense fallback={<Loading />}>
        {zipCodeData  ? (
          <DisplayInfo zipCodeData={zipCodeData} />
        ) : (
          <p className='text-[#790e0e] my-[8px] ml-[30px] lg:ml-0'>{err}</p>
        )}
      </Suspense>
      <button onClick={restart} className='text-white bg-[#020F20] hover:bg-[#0f2849] hover: p-1 w-[70px] rounded absolute right-10 bottom-[1.5rem] md:bottom-10'>Reset</button>
    </div>
  )
}