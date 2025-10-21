import ProjectCard from "../components/ProjectCard";
import SearchProjects from "../components/SearchProjects";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Project = () => {
    const { items } = useSelector((s: RootState) => s.project);
    const hasData = items && items.length > 0;

    return (
        <div>
            <SearchProjects />
            <div className="grid grid-cols-1 gap-4 pt-6">
                {hasData
                  ? items.slice(0, 6).map((p: any) => (
                      <ProjectCard key={p.id} project={p} />
                    ))
                  : Array.from({ length: 6 }, (_, i) => `skeleton-${i}`).map((key) => (
                      <SkeletonCard key={key} />
                    ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
                <button className="px-3 py-1.5 rounded-lg ring-1 ring-gray-300 dark:ring-white/10">Prev</button>
                <button className="px-3 py-1.5 rounded-lg ring-1 ring-gray-300 dark:ring-white/10">Next</button>
            </div>
        </div>
    )
}

const SkeletonCard = () => {
    return (
        <div className="flex flex-col rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm animate-pulse">
            <div className="p-3 pb-0">
                <div className="h-40 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="p-3 space-y-2 flex-1">
                <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="px-3 pb-5 pt-0">
                <div className="flex flex-wrap gap-1.5">
                    {Array.from({ length: 8 }, (_, i) => `chip-${i}`).map((key) => (
                        <span key={key} className="h-5 w-14 rounded-md bg-gray-200 dark:bg-gray-700" />
                    ))}
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 dark:bg-gray-700" />
        </div>
    );
}

export default Project; 