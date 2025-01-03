import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define menu items
  const menuItems = ['home', 'services', 'resume', 'work', 'contact'];

  return (
    <header>
      {/* Navbar */}
      <div className="text-white shadow-2xl rounded-sm px-2 my-3 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/home">
            <h1 className="text-4xl flex items-center hover:text-[#00FF99] transition duration-500 font-bold">
              Shanto
              <span className="text-[#00FF99] rounded-full mx-2 text-6xl">* 🎓</span>
            </h1>
          </Link>

          {/* Full Navbar for Larger Screens */}
          <div className="hidden xl:flex items-center gap-8">
            <nav className="flex gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  className={`capitalize font-medium py-1 text-[22px] border ${
                    location.pathname === `/${item}`
                      ? 'border-[#00FF99]'
                      : 'border-transparent'
                  } hover:border-white transition duration-500 rounded-sm px-3 ${
                    location.pathname === `/${item}`
                      ? 'text-[#00FF99]'
                      : 'hover:text-indigo-800'
                  } hover:bg-[#00FF99] hover:text-indigo-800`}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <Link to="/contact">
              <button className="rounded-full text-indigo-800 border-2 bg-[#00FF99] hover:bg-[#0A2647] hover:text-white hover:border-[#00FF99] text-[22px] px-4 h-[44px] transition duration-500">
                Hire me
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              aria-label="Open menu"
              className="text-2xl text-white"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#0A2647] text-white shadow-lg z-20 transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          aria-label="Close menu"
          className="absolute top-4 right-4 text-3xl text-white"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <nav className="flex flex-col mt-16 gap-6 px-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className={`capitalize font-medium text-[18px] border-b ${
                location.pathname === `/${item}`
                  ? 'text-[#00FF99]'
                  : 'hover:text-[#00FF99]'
              } pb-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="mt-6 block text-center">
          <button className="rounded-full text-indigo-800 border-2 bg-[#00FF99] hover:bg-[#0A2647] hover:text-white hover:border-[#00FF99] text-[20px] px-4 h-[44px] transition duration-500">
            Hire me
          </button>
        </Link>
      </aside>

      {/* Overlay Background */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
