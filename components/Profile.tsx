import Router from 'next/router'
import React from 'react'

export const Profile = () => {
  return (
    <div className='col-span-3 w-[300px] h-auto shadow-xl shadow-gray-200 rounded-sm lg:p-4 bg-[#FBFBFB]'>
        <div className='w-[180px] h-[180px] bg-[#FCF7B6] rounded-[50%] mx-auto'/>
        <button className='mt-7 w-[250px] h-[30px]' onClick={() => {Router.push("/login")}}>로그인</button>
        <button className='mt-2 w-[250px] h-[30px]'>회원가입</button>
    </div>
  )
}
