
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform with product catalog, shopping cart, and checkout functionality.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&h=400",
      tags: ["React", "Node.js", "MongoDB", "Razorpay"],
      demoUrl: "https://mern-e-commerce-app-tau.vercel.app/",
      codeUrl: "https://github.com/soumens7/MERN-E-Commerce-App",
    },
    {
      title: "Habit Tracker",
      description: "A productivity application for managing tasks/habits with add, remove and track streak features.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400",
      tags: ["Javascript", "NodeJS", "MongoDB", "EJS"],
      demoUrl: "https://habit-tracker-1-xz6v.onrender.com",
      codeUrl: "https://github.com/soumens7/Habit-tracker",
    },
    {
      title: "Content-Summarizer App",
      description: "a full-stack text summarization app using Next.js, Tailwind CSS, and Hugging Face NLP API for AI-powered summaries.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=400",
      tags: ["Next.js", "TailwindCSS", "Axios", "RESTful API", "AI (Hugging Face NLP API)"],
      demoUrl: "https://content-summarizer-msdb.onrender.com/",
      codeUrl: "https://github.com/soumens7/Content-Summarizer",
    },
    {
      title: "Voice-To-Text-App",
      description: "This is a voice to text Web App which converts voice in English and translate in Hindi.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      tags: ["Next.js (React)", "TailwindCSS", "Web Speech API", "Hugging Face Inference API"],
      demoUrl: "https://voice-to-text-app-shit.onrender.com/",
      codeUrl: "https://github.com/soumens7/Voice-To-Text-App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
          <a
      href="https://github.com/soumens7" 
      target="_blank"
      rel="noopener noreferrer"
    >
      View All Projects <Github size={16} className="ml-2" />
    </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Project card component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Card className={`overflow-hidden hover:shadow-lg transition-shadow animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="aspect-[3/2] overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span 
            key={i}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="ghost" size="sm" className="flex items-center" asChild>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={14} className="mr-1" /> Live Demo
        </a>
      </Button>
      <Button variant="ghost" size="sm" className="flex items-center" asChild>
        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
          <Code size={14} className="mr-1" /> View Code
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default Projects;
