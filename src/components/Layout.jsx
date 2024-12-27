import React from 'react';
import Navbar from './Navbar';  // Now the import matches the renamed file
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  {/* This is where child routes like Travel will render */}
      </main>
    </div>
  );
}

export default Layout;