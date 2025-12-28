import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Ahmad Abubakar Limateef. All rights reserved.</p>
          <p className="mt-1 text-xs">
            Crafted by{' '}
            <a 
              href="https://iysahyusuf.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Iysah Yusuf
            </a>
          </p>
        </div>
        <p className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
