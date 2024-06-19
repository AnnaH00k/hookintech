import { List } from '@phosphor-icons/react/dist/ssr';
import React, { useState, useEffect, useRef } from 'react';

export default function MenuHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !((menuRef.current as HTMLElement).contains(event.target as Node))) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      const timer = setTimeout(() => {
        setIsMenuOpen(false);
      }, 10000);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        clearTimeout(timer);
      };
    }
  }, [isMenuOpen]);

  return (
    <header>
      <nav className='flex flex-col sm:justify-start justify-center items-center'>

        <button
          onClick={toggleMenu}
          className={`mt-4 sm:hidden text-[#A0A2A0] bg-[#303830] px-3 py-1 rounded-full`}
        >
          <List size={32} />
        </button>

        <div
          ref={menuRef}
          className={`sm:flex ${isMenuOpen ? 'flex' : 'hidden'} sm:flex sm:flex-row grid grid-cols-2 flex-col items-center justify-center sm:fixed py-4 px-2 gap-2 w-full`}
        >
          <a href="/#projects" className="sm:text-lg text-[#A0A2A0] text-center text-md rounded-full bg-[#303830] px-3 py-1">
            Projects
          </a>
          <a
            href="/#techStack"
            className="sm:text-lg text-md rounded-full text-[#A0A2A0] text-center bg-[#303830] px-3 py-1"
          >
            Tech Stack
          </a>
          <a href="/#media" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Media
          </a>
          <a href="/#products" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Products
          </a>
          <a href="/blogposts" className="col-span-2 sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Blogposts
          </a>
          {/*
          <a href="/hooked0nlife" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Hooked0nLife
          </a>
          <a href="/hooked0npolitics" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Hooked0nPolitics
          </a>
          */}
        </div>
      </nav>
    </header>
  );
}
