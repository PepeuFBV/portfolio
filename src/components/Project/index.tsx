import React from 'react'
import { Project } from '@/types/types'

interface ProjectProps {
    index: number;
    project: Project;
}
const ProjectComponent: React.FC<ProjectProps> = ({ index, project }) => {
    return (
        <div key={index} className="flex flex-col items-center justify-center place-items-center w-full h-full p-4">
            <h1 className="text-3xl font-semibold">{project.name}</h1>
            <p className="text-lg">{project.description}</p>
            <a href={project.link} className="text-blue-500 underline">Link</a>
        </div>
    )
}

export default ProjectComponent
