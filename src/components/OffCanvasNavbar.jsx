import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Pages', path: '/pages' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

function OffCanvasNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-4 text-lg font-medium ${
      isActive
        ? 'text-white bg-blue-600'
        : 'text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'
    }`;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Off-canvas menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
          <button onClick={toggleMenu} className="text-gray-700 dark:text-white text-2xl">&times;</button>
        </div>
        <ul className="mt-4">
          {navItems.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <NavLink to={item.path} className={navLinkClass}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button */}
      <header className="p-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">MySite</h1>
        <button
          onClick={toggleMenu}
          className="text-gray-800 dark:text-white focus:outline-none text-2xl md:hidden"
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </header>
    </>
  );
}

export default OffCanvasNavbar;
