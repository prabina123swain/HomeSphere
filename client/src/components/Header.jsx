import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IoIosContact } from "react-icons/io";

const links = [
  { href: "/", label: "Home" },
  { href: "/#service", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/contactUs", label: "Contact" },
];

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-4 py-3'>
        
        {/* Logo */}
        <Link to='/'>
          <h1 className='font-bold text-lg sm:text-xl flex items-center'>
            <span className='text-slate-500'>Home</span>
            <span className='text-slate-700'>Sphere</span>
          </h1>
        </Link>
        
        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-base md:text-lg font-medium text-[#1A2421] capitalize hover:text-orange-500'
            >
              {link.label}
            </a>
          ))}
        </ul>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className='hidden md:flex items-center bg-slate-100 p-2 rounded-lg'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none text-sm md:text-base w-20 sm:w-48 md:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        {/* User Links */}
        <div className="flex items-center gap-4">
          {currentUser ? (
            <Link to='/profile'>
              <IoIosContact className='text-[#1A2421]' size="1.5em" />
            </Link>
          ) : (
            <div className='hidden md:flex items-center gap-4'>
              <Link
                to='/sign-in'
                className="text-base font-medium text-[#1A2421] capitalize hover:text-orange-500"
              >
                Sign in
              </Link>
              <Link
                to='/sign-up'
                className="text-base font-medium text-[#1A2421] capitalize hover:text-orange-500"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Menu */}
        <div className='flex md:hidden items-center'>
          <button className='text-[#1A2421]'>
            {/* You can add a mobile menu icon here */}
            <span className='text-sm'>Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden bg-slate-200 p-3 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className='text-sm font-medium text-[#1A2421] capitalize hover:text-orange-500'
          >
            {link.label}
          </Link>
        ))}

        <form
          onSubmit={handleSubmit}
          className='flex items-center bg-slate-100 p-2 rounded-lg mt-2'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none text-sm w-full'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        {!currentUser && (
          <div className='flex flex-col gap-2 mt-3'>
            <Link
              to='/sign-in'
              className="text-sm font-medium text-[#1A2421] capitalize hover:text-orange-500"
            >
              Sign in
            </Link>
            <Link
              to='/sign-up'
              className="text-sm font-medium text-[#1A2421] capitalize hover:text-orange-500"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
