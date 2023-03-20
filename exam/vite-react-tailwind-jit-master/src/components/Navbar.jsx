import React from "react";
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className="fixed left-0 right-0 fixed bottom-0 h-16 shadow-md border-b-2 border-gray-100 bg-secondary">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
         
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/Activity" className="text-primary hover:text-primary">Activities</Link></li>
            <li><Link to="/Search" className="text-primary hover:text-primary">Search</Link></li>
            <li><Link to="/Schedule" className="text-primary hover:text-primary">Schedule</Link></li>
          </ul>
        </div>
        <div />
      </nav>
    </div>
  );
}

export default Navbar;
