// import { useState } from 'react';
import * as SiIcons from 'react-icons/si'; // Import Simple Icons from react-icons

interface TechCategory {
  name: string;
  technologies: {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    icon: keyof typeof SiIcons; // Use keyof typeof SiIcons for type safety
  }[];
}

const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'React', level: 'Expert', icon: 'SiReact' },
      { name: 'TypeScript', level: 'Expert', icon: 'SiTypescript' },
      { name: 'Next.js', level: 'Advanced', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', level: 'Expert', icon: 'SiTailwindcss' },
      { name: 'HTML5', level: 'Expert', icon: 'SiHtml5' },
      { name: 'JavaScript', level: 'Expert', icon: 'SiJavascript' },
    ]
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', level: 'Advanced', icon: 'SiNodedotjs' },
      { name: 'Express', level: 'Advanced', icon: 'SiExpress' },
      { name: 'MongoDB', level: 'Intermediate', icon: 'SiMongodb' },
      { name: 'PostgreSQL', level: 'Advanced', icon: 'SiPostgresql' },
      { name: 'GraphQL', level: 'Intermediate', icon: 'SiGraphql' },
      { name: 'Redis', level: 'Intermediate', icon: 'SiRedis' },
    ]
  },
  {
    name: 'DevOps & Tools',
    technologies: [
      { name: 'Git', level: 'Expert', icon: 'SiGit' },
      { name: 'Docker', level: 'Intermediate', icon: 'SiDocker' },
      // { name: 'AWS', level: 'Intermediate', icon: 'SiAmazonaws' },
      { name: 'GitHub Actions', level: 'Advanced', icon: 'SiGithubactions' },
      { name: 'Linux', level: 'Advanced', icon: 'SiLinux' },
      { name: 'Webpack', level: 'Advanced', icon: 'SiWebpack' },
    ]
  }
];

export function TechStack() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500/20 text-green-400';
      case 'Advanced': return 'bg-blue-500/20 text-blue-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {techCategories.map((category) => (
        <div key={category.name} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">{category.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {category.technologies.map((tech) => {
              const Icon = SiIcons[tech.icon];
              return (
                <div key={tech.name} className="tech-card group">
                  <div className="text-3xl text-gray-400 group-hover:text-blue-400 transition-colors">
                    {Icon ? <Icon /> : <span className="text-sm">Icon Not Found</span>}
                  </div>
                  <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(tech.level)}`}>
                    {tech.level}
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