import React from 'react'
import Image from 'next/image'
import { Project } from '@/types/types'
import { getLanguagePos } from '@/utils/language-handler'

interface ProjectProps {
    key: string
    project: Project;
}
const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    const languagePos = getLanguagePos()

    return (
        <div className='flex flex-col items-center justify-center place-items-center w-full h-[22rem] rounded-lg border border-slate-800 text-card-foreground shadow-sm hover:bg-slate-800 transition duration-700 ease-in-out cursor-pointer'>
            <h1 className='text-3xl font-semibold'>{project.name[languagePos]}</h1>
            <p className='text-lg'>{project.description[languagePos]}</p>
            <a href={project.link} className='text-blue-500 underline'>Link</a>
        </div>
    )
}

export default ProjectComponent
