import React from 'react';

// @ts-ignore
const Layout = ({ children, className }) => {
  return (
    <div className={`w-full h-full p-5 ${className}`}>
      {children}
    </div>
  )
}

export default Layout;
