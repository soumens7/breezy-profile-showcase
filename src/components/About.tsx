
import React from 'react';
import { User, Mail, ExternalLink, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500" 
              alt="Professional portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a web developer with a passion for creating beautiful, responsive websites and applications. With over 5 years of experience in the field, I specialize in creating intuitive user interfaces and smooth user experiences.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in web development started when I built my first website at age 15. Since then, I've continuously improved my skills and expanded my knowledge to keep up with the ever-evolving tech landscape.
            </p>
            
            <div className="grid gap-4">
              <InfoItem icon={<User size={18} />} label="Name" value="Your Name" />
              <InfoItem icon={<Briefcase size={18} />} label="Experience" value="5+ Years" />
              <InfoItem icon={<Mail size={18} />} label="Email" value="your.email@example.com" />
              <InfoItem 
                icon={<ExternalLink size={18} />} 
                label="LinkedIn" 
                value="linkedin.com/in/yourprofile" 
                isLink
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for info items
const InfoItem = ({ 
  icon, 
  label, 
  value, 
  isLink = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  isLink?: boolean;
}) => (
  <div className="flex items-center gap-3">
    <div className="text-blue-600">
      {icon}
    </div>
    <div>
      <span className="text-gray-900 font-medium mr-2">{label}:</span>
      {isLink ? (
        <a 
          href={`https://${value}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-600">{value}</span>
      )}
    </div>
  </div>
);

export default About;
