import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-5 flex justify-between items-center">
      <div className="text-lg font-bold">Logo</div>
      <nav>
        <ul className="hidden sm:flex gap-4">
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button className="sm:hidden">Menu</button>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start Free Trial
      </button>
    </header>
  );
}

export default Header;
