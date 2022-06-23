import React, { useEffect } from 'react';

// Import icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Dummy data for demo purposes
import avatar from '../data/profile.png';
import { Cart, Chat, Notification, UserProfile } from '.';

// Context API
import { useStateContext } from '../contexts/ContextProvider';

// Implement component for automation
const NavButton = ({ hidden, title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button"
    onClick={customFunc}
    style={{color}}
    className={`relative text-xl rounded-full p-3 hover:bg-light-gray md:${hidden}`}
    >
      <span style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  // Hook context API
  const { setActiveMenu, isClicked, handleClick, setScreenSize, screenSize, currentColor } = useStateContext();


  // Use effect function for mobile responsiveness, we don't want to the sidebar to be active at default when we are using smaller devices..
  useEffect(() => {
    // Tracking the screen size
    const handleResize = () => 
      setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize)

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile responsive sidebar menu logic
  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])
  

  
  return (
    // Navbar functions!
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" 
        icon={<AiOutlineMenu />}
        color={currentColor}
        hidden="hidden"
      /> 
      {/* Cart button */}
      <div className="flex">
        <NavButton 
          title="Cart" 
          customFunc={() => handleClick('cart')} 
          color={currentColor} 
          icon={<FiShoppingCart />}
        /> 
        {/* Messages button */}
         <NavButton 
          title="Messages" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')} 
          color={currentColor} 
          icon={<BsChatLeft />}
        /> 
        {/* Notifications button */}
        <NavButton 
          title="Notifications" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')} 
          color={currentColor} 
          icon={<RiNotification3Line />}
        /> 
        {/* User Profile button */}
        <TooltipComponent
        content="User Profile"
        position="BottomCenter"
        >
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
          >
            <img
            alt="user"
            className="rounded-full w-8 h-8"
            src={avatar}
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Red</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
          </div>
        </TooltipComponent>

        {/* Buttons logic */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar