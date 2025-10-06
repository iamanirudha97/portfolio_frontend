import { motion } from 'framer-motion';
import { Project } from '../components/Project';

const projects = [
  {
    title: "Cloud Native Authentication System on GCP",
    description: "Developed a Email Authentication System on GCP with all the bells and whistles of Cloud Computing.",
    tech: [
      { name: "Terraform", color: "purple" },
      { name: "Packer", color: "sky" },
      { name: "Github Actions", color: "gray" },
      { name: "systemd", color: "amber" },
      { name: "PostgreSQL", color: "blue" },
      { name: "Node.js", color: "emerald" },
      { name: "CI/CD", color: "yellow" },
      { name: "GCP", color: "cyan" },
            
    ],
    link: "https://github.com/iamanirudha97/Cloud-Native-API-DEPLOYMENT-with-CICD",
  },
  {
    title: "Health-Care Plan Management System",
    description: "Built a secure, high-throughput engine that processes complex healthcare plan data, leveraging caching to sustain 10K+ concurrent requests and fast retrieval.",
    tech: [
      { name: "Node.js", color: "emerald" },
      { name: "Redis", color: "red" },
      { name: "RabbitMQ", color: "orange" },
      { name: "ElasticSearch", color: "yellow" },
      
    ],
    link: "https://github.com/iamanirudha97/INFO7255-Big-Data-Indexing-Techniques",
  },
  {
    title: "Indian Construction Network",
    description: "A full-stack webapp prototype on AWS for a B2B civil marketplace for hometown's local firms—my proudly “successful fail” xD (shipped, tested, learned).",
    tech: [
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "PostgreSQL", color: "sky" },
      { name: "Socket.IO", color: "yellow" },
      { name: "AWS", color: "orange" },
      { name: "Stripe API", color: "purple" }
      
    ],
    link: "https://github.com/iamanirudha97/ICN",
  }
];

// Skill groups use neutral chips to look great in both themes

const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Java', color: 'amber' },
      { name: 'C', color: 'violet' },
      { name: 'Python', color: 'emerald' },
      { name: 'JavaScript', color: 'yellow' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Go / Golang', color: 'cyan' },
      { name: 'SQL', color: 'indigo' },
      { name: 'HTML', color: 'orange' },
      { name: 'CSS', color: 'sky' },
      { name: 'C#', color: 'purple' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'FastAPI', color: 'emerald' },
      { name: 'Node.js', color: 'green' },
      { name: 'Express.js', color: 'neutral' },
      { name: 'Next.js', color: 'black' },
      { name: 'TailwindCSS', color: 'sky' },
      { name: 'Material UI', color: 'indigo' },
      { name: 'React', color: 'cyan' },
      { name: 'Gin (Go)', color: 'violet' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', color: 'indigo' },
      { name: 'MongoDB', color: 'green' },
      { name: 'Redis', color: 'red' },
      { name: 'MySQL', color: 'blue' },
      { name: 'Elasticsearch', color: 'amber' },
      { name: 'Sequelize ORM', color: 'purple' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Git', color: 'red' },
      { name: 'GitHub', color: 'neutral' },
      { name: 'GitHub Actions', color: 'indigo' },
      { name: 'Docker', color: 'sky' },
      { name: 'Kubernetes', color: 'blue' },
      { name: 'CI/CD', color: 'violet' },
      { name: 'Terraform', color: 'purple' },
      { name: 'Shell Scripting', color: 'neutral' },
      { name: 'RabbitMQ', color: 'orange' },
      { name: 'Packer', color: 'amber' },
      { name: 'AWS', color: 'orange' },
      { name: 'GCP', color: 'red' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Postman', color: 'orange' },
      { name: 'Unit Testing', color: 'emerald' },
      { name: 'Integration Testing', color: 'cyan' },
      { name: 'Selenium', color: 'green' },
      { name: 'Jest', color: 'yellow' },
    ],
  },
];

// Colored header text for each skill group (chips remain neutral)
const skillTitleColors: Record<string, string> = {
  'Programming Languages': 'text-indigo-500 dark:text-indigo-400',
  'Frameworks': 'text-blue-500 dark:text-blue-400',
  'Databases': 'text-emerald-500 dark:text-emerald-400',
  'Cloud & DevOps': 'text-violet-500 dark:text-violet-400',
  'Testing': 'text-amber-500 dark:text-amber-400',
};

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "CareerGPT",
              date: "Dec 2024 - May 2025",
              title: "Software Engineer Coop",
              description: ["Worked on developing AI Agents in HR-tech."],
              dotColor: "bg-green-500"
            },
            {
              company: "Northeastern University, Boston",
              date: "2023 - 2025",
              title: "M.S. Software Engineering Systems",
              description: ["Getting my Master's Degree to justify my Bachelor's Degree."],
              dotColor: "bg-red-500"
            },
            {
              company: "CMP Infotech",
              date: "June 2020 - Aug 2020",
              title: "Software Development Engineer Intern",
              description: ["Worked on streamlining the checkout flow to reduce cart abandonment rates and lift completed purchase rates."],
              dotColor: "bg-blue-500"
            },
            {
              company: "Xavier Institute of Engineering, Mumbai",
              date: "2016 - 2021",
              title: "B.E. in Computer Engineering",
              description: ["Got my Engineering degree to make my parents proud."],
              dotColor: "bg-amber-500"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc) => (
                    <li key={`${item.company}-${item.date}-${desc}`}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    },
    {
      title: 'Skills',
      content: (
        <div className="space-y-2 pb-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="group py-0.5"
              whileHover={{ scale: 1.05 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="space-y-1">
                <span className={`block text-sm font-semibold ${skillTitleColors[group.title] ?? 'text-blue-500 dark:text-blue-400'}`}>
                  {group.title}:
                </span>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="text-[11px] leading-5 px-2 py-0.5 rounded-md bg-gray-100 text-black ring-1 ring-gray-200 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
  ]

  export const hobbies = [
    {
      title: "Hobbies",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              title: "YouTube",
              description: "documenting my life as a software engineer",
              stats: "19 videos",
              color: "rose"
            },
            {
              title: "Real Estate Investing",
              description: "playing monopoly but with real money",
              stats: "0 properties",
              color: "blue"
            },
            {
              title: "Stocks and Crypto",
              description: "buying high and selling low is my philosophy",
              stats: "-$25,000 profit",
              color: "green"
            },
            {
              title: "Mechanical Keyboards",
              description: "fun but will be the reason why im homeless",
              stats: "3 custom keyboards",
              color: "purple"
            },
          ].map((hobby) => (
            <motion.div
              key={hobby.title}
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className={`font-medium`}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {hobby.description}
                </p>
                <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                  {hobby.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ]