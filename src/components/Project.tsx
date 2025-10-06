import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Portal } from '../utils/Portal';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: { name: string; color: string; }[];
    link: string;
  };
}

export const Project = ({ project }: ProjectProps) => {
  const [isHovering, setIsHovering] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Static mapping so Tailwind can see and generate the classes at build-time
  const COLOR_BG_CLASS: Record<string, string> = {
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    neutral: 'bg-neutral-500',
    green: 'bg-green-500',
    amber: 'bg-amber-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    emerald: 'bg-emerald-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500',
    violet: 'bg-violet-500',
    sky: 'bg-sky-500',
    red: 'bg-red-500',
    black: 'bg-black',
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, []);

  return (
    <div className="relative overflow-visible">
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group py-2"
        whileHover={{ scale: 1.05 }}
        style={{ transformOrigin: 'left' }}
      >
        <div className="flex flex-col sm:justify-between gap-1">
          <div>
            <h3 className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {project.tech.map((tech) => (
              <span
                key={tech.name}
                // className={`text-xs px-2 py-1 rounded-full bg-${tech.color}-500 text-white`}
                className={`text-xs px-2 py-1 rounded-full text-white ${COLOR_BG_CLASS[tech.color] ?? 'bg-gray-500'}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </motion.a>

      {isHovering && (
        <Portal>
          <div
            className="fixed pointer-events-none"
            style={{
              position: 'fixed',
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -120%)',
              width: '200px',
              height: '120px',
              zIndex: 9999,
            }}
          >
          </div>
        </Portal>
      )} 
    </div>
  );
};