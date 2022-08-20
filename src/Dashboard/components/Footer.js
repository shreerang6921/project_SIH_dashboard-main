import React from 'react';
const d = new Date();
const year = d.getFullYear();
const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © {year} All rights reserved.
    </p>
  </div>
);

export default Footer;
