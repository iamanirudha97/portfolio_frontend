const ProjectCard = () => {
  const project = {
    id: 0,
    title: 'Cloud Native Email Auth',
    desc: 'Production-ready email authentication service with Cloud Run, Terraform, GitHub Actions, and PostgreSQL. Includes zero-downtime deploys and observability hooks.',
    url: 'https://github.com/iamanirudha97/Cloud-Native-API-DEPLOYMENT-with-CICD',
    api_url: null,
    languages: ['TypeScript', 'Node.js', 'SQL'],
    topics: ['GCP', 'CI/CD', 'Terraform', 'Cloud Run', 'PostgreSQL'],
    image: null,
  };

  const { title, desc, url, topics, languages, image } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg/20 transition-transform hover:scale-[1.01]"
    >
      {/* Image on top */}
      <div className="p-3 pb-0">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-40 object-cover rounded-xl ring-1 ring-gray-200 dark:ring-white/10"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-40 rounded-xl ring-1 ring-gray-200 dark:ring-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 dark:from-indigo-400/10 dark:via-violet-400/10 dark:to-fuchsia-400/10 flex items-center justify-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">No image</span>
          </div>
        )}
      </div>

      {/* Content below */}
      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white text-[15px]">
          {title}
        </h3>
        {desc && (
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
            {desc}
          </p>
        )}

        {(topics && topics.length > 0) && (
          <div className="pt-1 flex flex-wrap gap-1.5">
            {topics.slice(0, 8).map((tag) => (
              <span
                key={tag}
                className="text-[11px] leading-5 px-2 py-0.5 rounded-md bg-gray-100 text-gray-800 ring-1 ring-gray-200 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10"
              >
                {tag}
              </span>
            ))}
            {topics.length > 8 && (
              <span className="text-[11px] leading-5 px-2 py-0.5 rounded-md bg-gray-100 text-gray-800 ring-1 ring-gray-200 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10">
                +{topics.length - 8} more
              </span>
            )}
          </div>
        )}

        {(languages && languages.length > 0) && (
          <div className="pt-1 flex flex-wrap gap-1.5">
            {languages.map((lang) => (
              <span key={lang} className="text-[11px] leading-5 px-2 py-0.5 rounded-md bg-gray-50 text-gray-700 ring-1 ring-gray-200 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
                {lang}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom gradient hover bar */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default ProjectCard;