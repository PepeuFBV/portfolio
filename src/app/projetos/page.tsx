import ProjectComponent from '@/components/Project';
import projects from '@/data/projects';

export default function Projetos() {
    return (
        <section className="flex flex-col items-center justify-center place-items-center w-full h-full">
            <h1 className="text-5xl font-semibold">Projects</h1>
            <div>
                {projects.map((project, index) => (
                    <ProjectComponent index={index} project={project} />
                ))}
            </div>
        </section>
    )
}
