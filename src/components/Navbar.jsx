import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'The Travel Collective', url: '/travel' },
  { title: 'Photography', url: '/photography' },
  { title: 'Art', url: '/art' },
  { title: 'Lifestyle', url: '/lifestyle' },
  { title: 'Experiences', url: '/experiences' }
];

const iconList = [
  { icon: <FaUser /> },
  { icon: <FaHeart /> },
  { icon: <FaShoppingCart /> },
];

const bgColor = 'bg-pink-900'; // Original bg color
const bgOpacity = 'bg-opacity-100'; // Set opacity for transparency
const brandName = 'In Essence';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll event to hide or show navbar based on 1/5 scroll position
  useEffect(() => {
    const handleScroll = () => {
      const oneFifthPoint = document.documentElement.scrollHeight / 5; // Calculate 1/5 of the page height
      if (window.scrollY > oneFifthPoint) {
        setIsHidden(true); // Hide navbar when scrolling past 1/5 of the page
      } else {
        setIsHidden(false); // Show navbar when scrolling back up
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };

  return (
    <>
      {!isMobile ? (
        // Desktop Navbar Code
        <nav
          className={`${bgColor} ${bgOpacity} h-auto fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out transform ${isHidden ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}`}
        >
          <div className="flex justify-between mx-auto items-center py-4 px-24">
            <div className="text-white font-bold text-xl">{brandName}</div>
            <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
              {navLinks.map((link, index) => (
                <li key={index} className="text-white text-sm">
                  <Link
                    to={link.url}
                    className="hover:text-gray-400"
                    onClick={() => {
                      console.log(`Navigating to ${link.title}`);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex text-white gap-6 items-center cursor-pointer">
              {iconList.map((item, index) => (
                <div key={index}>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
                // Mobile Navbar Code Here
                <nav className={`h-screen ${bgColor} py-4 px-4`}>
                    <div className="mx-auto flex justify-between items-center ">
                        <div className="text-white font-bold text-xl">Logo</div>
                        <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index} onClick={index === iconList.length - 1 ? handleBarsIconClick : null}>{item.icon}</div>
                            ))}
                            <FaBars onClick={handleBarsIconClick} className="text-white cursor-pointer" />
                        </div>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 flex justify-center items-center">
                            <div className={`absolute inset-0 ${modalColor}`} />
                            <FaTimes
                                className="absolute top-6 right-4 text-white cursor-pointer"
                                onClick={toggleModal}
                                style={{ fontSize: '16px' }}
                            />
                            <div className="relative bg-gray-900 w-full">
                                <div className="flex flex-col gap-8 items-center justify-center h-full">
                                    {navLinks.map((link, index) => (
                                        <span key={index} className="text-white font-light text-2xl cursor-pointer">{link.title}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}
