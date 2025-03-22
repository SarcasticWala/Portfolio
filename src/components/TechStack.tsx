// import { useState } from 'react';
import * as SiIcons from 'react-icons/si'; // Import Simple Icons from react-icons
interface TechCategory {
  name: string;
  technologies: {
    name: string;
    // level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    icon: keyof typeof SiIcons; // Use keyof typeof SiIcons for type safety
  }[];
}

const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'React',  icon: 'SiReact' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'HTML5',  icon: 'SiHtml5' },
      { name: 'JavaScript', icon: 'SiJavascript' },
    ]
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express',  icon: 'SiExpress' },
      { name: 'MongoDB',  icon: 'SiMongodb' },
      { name: 'MySQL',  icon: 'SiMysql' }, // Fixed icon
      { name: 'Firebase',  icon: 'SiFirebase' },
    ]
  },
  {
    name: 'DevOps & Tools',
    technologies: [
      { name: 'Git',  icon: 'SiGit' },
      { name: 'Docker', icon: 'SiDocker' },
      // { name: 'AWS', level: 'Intermediate', icon: 'SiAmazonaws' },
      { name: 'GitHub Actions',  icon: 'SiGithubactions' },
      { name: 'Linux', icon: 'SiLinux' },
      // { name: 'VS Code', level: 'Expert', icon: 'SiVisualstudiocode' }, // Fixed icon
    ]
  }
];

export function TechStack() {
  // const getLevelColor = (level: string) => {
  //   switch (level) {
  //     case 'Expert': return 'bg-green-500/20 text-green-400';
  //     case 'Advanced': return 'bg-blue-500/20 text-blue-400';
  //     case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
  //     default: return 'bg-gray-500/20 text-gray-400';
  //   }
  // };

  return (
    <div className="space-y-12"> {/* Increased spacing between categories */}
      {techCategories.map((category) => (
        <div key={category.name} className="space-y-6"> {/* Adjusted spacing */}
          <h3 className="text-xl font-semibold text-gray-200 text-center md:text-left">{category.name}</h3> {/* Centered on small screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Improved grid responsiveness */}
            {category.technologies.map((tech) => {
              const Icon = SiIcons[tech.icon];
              return (
                <div key={tech.name} className="tech-card group flex flex-col items-center text-center">
                  <div className="text-3xl text-gray-400 group-hover:text-blue-400 transition-colors">
                    {Icon ? <Icon /> : <span className="text-sm">Icon Not Found</span>}
                  </div>
                  <span className="text-lg font-medium group-hover:text-blue-400 transition-colors mt-2">
                    {tech.name}
                  </span>
                 
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}