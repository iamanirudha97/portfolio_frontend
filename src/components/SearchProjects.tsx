import { useState } from 'react';

const SearchProjects = () => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    'ASP.NET', 'CI/CD', 'Elasticsearch', 'FAISS', 'FastAPI', 'GAN', 'GCP', 'LangChain', 'NLP', 'OAuth 2.0',
    'OpenCV', 'Pinecone', 'Plotly', 'Python3', 'REST API', 'React + Vite', 'ReactJS', 'Redis', 'Redux', 'SQL',
    'Tensorflow', 'Terraform', 'AWS', 'PostgreSQL'
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl sm:text-5xl font-medium">
        <span className="text-gray-900 dark:text-white"> My </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">Projects</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Explore my recent work showcasing my skills in software engineering, design, and problem-solving.
      </p>

     <div className="flex items-center justify-center gap-4">
        <div className="relative w-full max-w-5xl">
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <input
                id="project-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full h-14 pl-12 pr-16 rounded-2xl text-base
                            bg-white/80 dark:bg-white/10 backdrop-blur
                            border border-gray-200 dark:border-white/10
                            placeholder-gray-500 dark:placeholder-gray-400
                            text-gray-900 dark:text-gray-100
                            focus:outline-none focus:ring-2 focus:ring-indigo-400/40 dark:focus:ring-indigo-400/30"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
        </div>

        <button
          type="button"
          onClick={() => setShowFilters((v) => !v)}
          aria-expanded={showFilters}
          className="flex items-center gap-2 px-4 h-12 rounded-2xl ring-1 ring-indigo-400/30 text-indigo-400 dark:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="7" x2="20" y2="7"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
            <line x1="10" y1="17" x2="14" y2="17"/>
          </svg>
          <span className="text-sm font-medium">Filters</span>
        </button>
      </div>

      {showFilters && (
        <div className="max-w-5xl mx-auto rounded-xl p-3 sm:p-4 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-gray-200 dark:ring-white/10">
          <p className="text-xs font-light text-gray-700 dark:text-gray-300 mb-2">Technologies & Tags</p>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-2.5 py-1 rounded-full text-[11px] ring-1 transition-colors 
                    ${active
                      ? 'bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-400/30'
                      : 'bg-gray-100 text-gray-800 ring-gray-200 hover:bg-gray-200/70 dark:bg-transparent dark:text-gray-300 dark:ring-white/10 dark:hover:bg-white/5'}`}
                  aria-pressed={active}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchProjects;