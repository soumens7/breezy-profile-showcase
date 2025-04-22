
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-gray-900">
          Portfolio
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        
        {/* Mobile Navigation */}
        <nav className={cn(
          "fixed inset-0 bg-white pt-20 px-8 flex flex-col gap-4 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

// Helper component for nav links with hover effect
const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
  <a 
    href={href}
    onClick={onClick}
    className="text-gray-700 hover:text-gray-900 px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all"
  >
    {children}
  </a>
);

export default Navbar;
