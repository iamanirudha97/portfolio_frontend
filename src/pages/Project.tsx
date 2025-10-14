import ProjectCard from "../components/ProjectCard";
import SearchProjects from "../components/SearchProjects";

const Project = () => {
    return (
        <div>
            <SearchProjects />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {Array.from({ length: 6 }).map((_, i) => <ProjectCard key={i} />)}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
                <button className="px-3 py-1.5 rounded-lg ring-1 ring-gray-300 dark:ring-white/10">Prev</button>
                <button className="px-3 py-1.5 rounded-lg ring-1 ring-gray-300 dark:ring-white/10">Next</button>
            </div>
        </div>
    )
}

export default Project; 