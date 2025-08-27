const Header: React.FC = () => {
    return (
      <header className="absolute top-6 w-full flex justify-between px-10 text-sm font-medium z-50">
        <div>Muhammad Zulfan</div>
        <nav className="flex gap-6 px-4 py-2 rounded-full bg-[#22252F]">
        <a
            href="#work"
            className="px-4 py-2 rounded-full bg-[#22252F] hover:bg-gray-300 transition-colors duration-200 text-sm font-medium"
          >
            Work
          </a>
          <a
            href="#info"
            className=" px-4 py-2 rounded-full bg-[#22252F] hover:bg-gray-300 transition-colors duration-200 text-sm font-medium"
          >
            Info
          </a>
        </nav>
        <nav className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">LinkedIn</a>
          <a href="/resume.pdf" className="hover:text-gray-400">Resume</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  