import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';

// Dummy data for demo purposes
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/profile.png';


const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        {/* Custom Button Component - Close Button */}
        <Button 
          icon={<MdOutlineCancel />}
          color="#AB99AB"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img 
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        {/* Profile Basic Information */}
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">  Red Kristian  </p>
          <p className="text-sm dark:text-gray-400">  Administrator </p>
          <p className="font-semibold text-sm dark:text-gray-400 text-gray-500">  redk@shop.com </p>
        </div>
      </div>
      {/* Mapping through user profile data to spread out the values in the array inside the dummy data */}
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} 
          className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg}}
              className="text-gray-400 rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Custom Button Component - Logout Button */}
      <div className="mt-5">
        <Button 
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  )
}

export default UserProfile