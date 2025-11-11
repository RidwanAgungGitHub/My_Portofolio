import React from 'react';
import { Download } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  const handleDownloadCV = () => {
    // Logic untuk download CV
    alert('Downloading CV...');
  };

  return (
    <div className="navbar bg-base-100 shadow-xl fixed top-0 z-50 backdrop-blur-lg bg-opacity-90 h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52">
            {['Beranda', 'Tentang', 'Proyek', 'Skill'].map((item) => (
              <li key={item}>
                <a 
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-lg py-2 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-2">
          Portfolio
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {['Beranda', 'Tentang', 'Proyek', 'Skill'].map((item) => (
            <li key={item}>
              <a 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="btn btn-ghost btn-sm text-base hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button 
          onClick={handleDownloadCV}
          className="btn btn-primary btn-sm gap-2"
        >
          <Download className="w-4 h-4" />
          CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;