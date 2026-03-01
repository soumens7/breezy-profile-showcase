import React from 'react';
import { Progress } from '@/components/ui/progress';

type Skill = {
  name: string;
  progress: number;
  color: string;
};

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML & CSS', progress: 80, color: 'bg-blue-500' },
    { name: 'JavaScript', progress: 85, color: 'bg-yellow-500' },
    { name: 'React', progress: 75, color: 'bg-cyan-500' },
    { name: 'Bootstrap', progress: 70, color: 'bg-purple-500' },
    
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', progress: 50, color: 'bg-green-500' },
    { name: 'Express', progress: 65, color: 'bg-gray-600' },
    { name: 'MongoDB', progress: 70, color: 'bg-green-600' },
    { name: 'SQL', progress: 60, color: 'bg-blue-400' },
  ];

  const otherSkills: string[] = [
    'Git & GitHub',
    'Responsive Design',
    'REST APIs',
    'Performance Optimization',
    'Testing',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 text-center">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for skill bars
const SkillBar = ({ skill }: { skill: Skill }) => {
  // This creates a custom class for each progress bar
  // e.g., bg-blue-500, bg-yellow-500, etc.
  const progressClass = skill.color;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium text-gray-800">{skill.name}</span>
        <span className="text-gray-600">{skill.progress}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${progressClass} transition-all duration-500`} 
          style={{ width: `${skill.progress}%` }}
        />
      </div>
    </div>
  );
};

export default Skills;
