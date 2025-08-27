import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-center text-gray-500 text-sm">
      <div className="container mx-auto px-4">
        <p>Muhammad Zulfan © 2025. All rights reserved.</p>
        <div className="mt-2 space-x-4 flex justify-center">
          <a href="https://github.com/ZullNgoding" target="_blank" rel="noreferrer" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/muhammad-zulfan-6445862b7" target="_blank" rel="noreferrer" className="hover:text-gray-400">LinkedIn</a>
          <a href="mailto:Zulfankaltara@gmail.com" className="hover:text-gray-400">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;