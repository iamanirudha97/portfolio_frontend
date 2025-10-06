import { Link } from "react-router-dom";
import profilePhoto from "../assets/profilephoto.jpg"

const Intro = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-4 text-center md:text-left order-2 md:order-1">
                <p className="text-gray-900 dark:text-gray-300 leading-relaxed font-medium">
                    I’m a Graduate student at Northeastern University, Boston, specializing in Software Engineering. I build scalable systems across Backend and DevOps to solve practical problems.
                </p>
                <ul className="text-gray-800 dark:text-gray-300 space-y-1 list-disc list-inside font-medium">
                    <li>Impact over hype, measurable over magical.</li>
                    <li>Boston winters taught me to value warm caches.</li>
                    <li>I like small deploys, loud alerts, and quiet incidents.</li>
                    <li>When in doubt, I let the metrics argue.</li>
                </ul>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-1">        
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
                    >
                        Download Resume
                    </a>
                    <Link to="/contact" className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-white/90 hover:bg-white dark:text-white dark:bg-white/10 dark:hover:bg-white/15 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur">Contact</Link>
                    
                </div>
            </div>

            <div className="relative group justify-self-center md:justify-self-end order-1 md:order-2">
                <div className="relative inline-block rounded-full p-[3px] bg-gradient-to-tr from-indigo-300/40 via-violet-300/40 to-cyan-300/40 dark:from-indigo-400/20 dark:via-violet-400/20 dark:to-cyan-400/20 shadow-md bg-white/50 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10">
                        <img 
                            src={profilePhoto} 
                            alt="Intro placeholder"
                            className="h-44 w-44 md:h-64 md:w-64 object-cover rounded-full"
                        />                
                </div>
            </div>
        </div>
    );
}

export default Intro;