
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-2 animate-fade-in-left">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail className="text-blue-500" />}
                title="Email"
                content="soumensarkar7498@gmail.com"
                link="mailto:soumensarkar7498@gmail.com"
              />
              <ContactItem 
                icon={<Phone className="text-blue-500" />}
                title="Phone"
                content="+91 8335032474"
                link="tel:+918335032474"
              />
              <ContactItem 
                icon={<MapPin className="text-blue-500" />}
                title="Location"
                content="Kolkata, India"
              />
              <ContactItem 
                icon={<Linkedin className="text-blue-500" />}
                title="LinkedIn"
                content="linkedin.com/in/soumensarkar"
                link="https://www.linkedin.com/in/soumensarkar/"
              />
              <ContactItem 
                icon={<Github className="text-blue-500" />}
                title="GitHub"
                content="github.com/soumens7"
                link="https://github.com/soumens7"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Youe Email ID"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for contact items
const ContactItem = ({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  link?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 hover:underline"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
