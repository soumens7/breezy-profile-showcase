
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
      image: "/Themes/pexels-karolina-grabowska-5632382.jpg",
      tags: ["React", "Node.js", "MongoDB", "REST API", "Razorpay"],
      demoUrl: "https://mern-e-commerce-app-tau.vercel.app/",
      codeUrl: "https://github.com/soumens7/MERN-E-Commerce-App",
    },
    {
      title: "Book-Manager",
      description: "A personal space for readers. Log your books, reflect on your habits, and rediscover your favourite authors.",
      image: "/Themes/pexels-polina-kovaleva-5717413.jpg",
      tags: ["NextJS", "MongoDB", "RESTful API"],
      demoUrl: "https://book-manager-seven-steel.vercel.app/",
      codeUrl: "https://github.com/soumens7/Book-Manager",
    },
    {
      title: "AI Travel Planner",
      description: "A full-stack web application that generates personalised, day-by-day travel itineraries using an AI agent powered by Google Gemini. Users sign up, describe their trip, and watch their itinerary appear in real-time — fully editable, budget-estimated, and hotel-recommended.",
      image: "https://images.pexels.com/photos/669613/pexels-photo-669613.jpeg",
      tags: ["Next.js", "TailwindCSS", "RESTful API", "Gen AI (Google gemini API)", "CI/CD"],
      demoUrl: "https://ai-travel-planner-sand-mu.vercel.app/",
      codeUrl: "https://github.com/soumens7/AI-Travel-Planner",
    },
    {
      title: "Document Intelligence Platform",
      description: "This project is a Document Intelligence Platform that allows users to upload documents (PDF, DOCX) and interact with them through a conversational AI interface. The system processes uploaded documents, extracts meaningful information, and enables users to ask questions with grounded, context-aware responses.It is designed as a multi-user system with strict data isolation, ensuring users can only access their own documents and chat history.",
      image: "/Themes/markus-winkler-zkF_DbblKSI-unsplash.jpg",
      tags: ["Next.js", "TailwindCSS", "MongoDB", "Google Gemini", "JWT"],
      demoUrl: "https://document-intelligence-platform-rag-system-25iw5yso4.vercel.app/",
      codeUrl: "https://github.com/soumens7/Document-Intelligence-Platform-RAG-System-",
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
