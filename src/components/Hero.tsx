
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          <span className="block">Hello, I'm</span>
          <span className="block text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 mt-2">
            Soumen
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          A passionate web developer crafting beautiful and functional digital experiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            View My Work
          </Button>
          </a>
          <a href="#contact">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6">
            Contact Me
          </Button>
          </a>
        </div>
        
        {/* Scroll down indicator */}
        <a 
          href="#about" 
          className="absolute bottom-10 flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
