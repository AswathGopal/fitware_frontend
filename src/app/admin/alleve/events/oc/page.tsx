'use client';
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link'
import { AdminContestForm } from './AdminContestForm';


function Page() {
  

  const [indat,setIndat]=useState({
    ct:'',
    conName:'',
    organizer:'',
    sdate:'',
    edate:'',
    st:'',
    et:'',
    dec:'',
    price:'',
  }) 
  const [suc,setSuc]=useState(false)


  const hassubmit = async (e) => {
    e.preventDefault(); 
    const res= await axios.post('/api',indat)
  if(res.status==200){
    setSuc(true)
    
    setTimeout(()=>{setSuc(false); },3000)
    
    
  }
  };
  
  return <>
  <div className='mt-5'>
    <Link className='bg-black text-white p-3 m-5  rounded-md '  href="/alleve">Back</Link>
    <div className='flex justify-center'>{suc?<h1 className='text-center bg-green-500 p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Submitted</h1>:<h1></h1>}</div>
    </div>
    <h1 className='text-center font-bold text-4xl mt-20'>Add Contest</h1>
  <div className=' md:p-10 p-5 lg:ml-40 lg:mr-40  md:m-10 m-5 rounded '>
    <AdminContestForm/> 
    {/* <form className='flex flex-col gap-2' >
    <label  className=' text-lg font-semibold mt-2'  htmlFor="name">Contest Type</label>
        <select  className='p-2 rounded-md' onChange={(e)=>{
          setIndat({...indat,ct:e.target.value})}}>
            <option>Yoga</option>
            <option>anothor</option>
        </select>
     
    <label  className=' text-lg font-semibold mt-2'  htmlFor="name">Contest Name</label>
    <input className='p-2 rounded-md' type="text" id="username" name="name" onChange={(e)=>{
          setIndat({...indat,conName:e.target.value})
    }}></input>
  
    <label  className=' text-lg font-semibold mt-2' htmlFor="organizer">Organizer</label>
    <input className='p-2 rounded-md' type="text" id="organizer" name="organizer" onChange={(e)=>{
          setIndat({...indat,organizer:e.target.value})}}></input>

    <label  className=' text-lg font-semibold mt-2' htmlFor="date">StartDate</label>
    <input className='p-2 rounded-md' type="date" id="date" name="date" onChange={(e)=>{
      setIndat({...indat,sdate:e.target.value})}}></input>

<label  className=' text-lg font-semibold mt-2' htmlFor="date">EndDate</label>
    <input className='p-2 rounded-md' type="date" id="date" name="date" onChange={(e)=>{
      setIndat({...indat,edate:e.target.value})}}></input>

    <label  className=' text-lg font-semibold mt-2'> StartTime</label>
    <input className='p-2 rounded-md' type="time" name='st' onChange={(e)=>{
      setIndat({...indat,st:e.target.value})}}/>

    <label  className=' text-lg font-semibold mt-2'> EndTime</label>
    <input className='p-2 rounded-md' type="time" name='et' onChange={(e)=>{
      setIndat({...indat,et:e.target.value})}}/>

   

<label  className=' text-lg font-semibold mt-2'>Price</label>
    <input className='p-2 rounded-md' type="number"  name="price" onChange={(e)=>{
      setIndat({...indat,price:e.target.value})}}></input>

    <label  className=' text-lg font-semibold mt-2'>Description</label>
   <textarea name="dec" onChange={(e)=>{
    setIndat({...indat,dec:e.target.value})}}></textarea>

   <button className=' bg-red-500 font-semibold p-3 rounded sm:mt-10 mt-5 w-40 ml-20 sm:ml-60 xl:ml-8 lg:w-1/3 md:ml-72 md:w-60  hover:bg-black hover:text-white'  type="submit"  onClick={hassubmit}>Submit</button>
     
    </form> */}
  </div>

  </>
}


export default Page