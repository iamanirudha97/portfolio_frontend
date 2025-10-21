import { useLayoutEffect, useRef, useState } from 'react';
export interface ProjectApiItem {
  id: number;
  title: string;
  desc?: string | null;
  url: string;
  api_url?: string | null;
  languages?: string[] | null;
  topics?: string[] | null;
  image?: string | null;
}

const ProjectCard = ({ project }: { project: ProjectApiItem }) => {
  const title = project.title;
  const desc = project.desc ?? '';
  const url = project.url ?? '#';
  const topics = project.topics ?? [];
  const languages = project.languages ?? [];
  const chips = [...topics, ...languages];
  const [visibleCount, setVisibleCount] = useState<number>(chips.length);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const compute = () => {
      const measureEl = measureRef.current;
      if (!measureEl) return;
      const children = Array.from(measureEl.children) as HTMLElement[];
      if (children.length === 0) {
        setVisibleCount(0);
        return;
      }

      const lineTops: number[] = [];
      let count = 0;
      for (const el of children) {
        const top = el.offsetTop;
        const lastTop = lineTops.at(-1) ?? -Infinity;
        if (lineTops.length === 0 || top > lastTop + 1) {
          lineTops.push(top);
        }
        if (lineTops.length <= 3) {
          count++;
        }
      }

      // If there is overflow beyond 3 lines, reserve one spot for +N
      if (children.length > count) {
        count = Math.max(0, count - 1);
      }
      setVisibleCount(count);
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [chips.join('|')]);

  // dynamic fitting handled below; initial values unused here
 
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg/20 transition-transform hover:scale-[1.01]"
    >
      {/* Content */}
      <div className="p-4 space-y-2 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 dark:text-white text-[15px]">
          {title}
        </h3>
        {desc && (
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 flex-1">
            {desc}
          </p>
        )}
      </div>

      {/* Chips at bottom - max 3 lines */}
      {chips.length > 0 && (
        <div className="px-4 pb-4 pt-0">
          {/* Visible chips */}
          <div ref={containerRef} className="flex flex-wrap gap-1.5">
            {chips.slice(0, visibleCount).map((chip) => (
              <span
                key={chip}
                className="text-[11px] leading-5 px-2 py-0.5 rounded-md bg-gray-100 text-gray-800 ring-1 ring-gray-200 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10"
              >
                {chip}
              </span>
            ))}
            {chips.length - visibleCount > 0 && (
              <span className="text-[11px] leading-5 px-2 py-0.5 rounded-md bg-gray-100 text-gray-800 ring-1 ring-gray-200 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10">
                +{chips.length - visibleCount}
              </span>
            )}
          </div>

          {/* Measurement container (hidden) */}
          <div ref={measureRef} className="flex flex-wrap gap-1.5 absolute left-0 top-0 invisible pointer-events-none opacity-0 w-full">
            {chips.map((chip) => (
              <span
                key={`measure-${chip}`}
                className="text-[11px] leading-5 px-2 py-0.5 rounded-md"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom gradient hover bar (overlay, no layout shift) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default ProjectCard;