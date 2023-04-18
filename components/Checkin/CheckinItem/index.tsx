import { User } from '@/types/checkin.type'
import React from 'react'

const CheckinItem = ({studentNumber, name, depart, roomNumber, checkinTime}:User) => {
  return (
    <div className='w-[850px] h-[70px] bg-[#EDFFD6] rounded-md m-auto hover:cursor-pointer'>
        <ul className='flex justify-evenly font-bold pt-5'>
            <li>{studentNumber}</li>
            <li>{name}</li>
            <li>{depart}</li>
            <li>{roomNumber}</li>
            <li>{checkinTime}</li>
        </ul>
    </div>
  )
}

export default CheckinItem