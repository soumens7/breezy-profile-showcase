
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Soumen Sarkar</h3>
            <p className="text-gray-400 mt-2">Web Developer & Designer</p>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
            <SocialLink href="mailto:your.email@example.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          {/* <div className="mb-4 md:mb-0">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </nav>
          </div> */}
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Soumen Sarkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

export default Footer;
