'use client'

import React, { useState, useEffect } from 'react'
import { Project } from '@/components/core/Projects/Project'
import { Link } from '@/components/core/Icons/components/link'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import { ProjectData } from '@/types/types'

interface ProjectsProps {
    INITIAL_DELAY?: number
    languagePos?: number
}
const Projects: React.FC<ProjectsProps> = ({ INITIAL_DELAY = 0, languagePos = 0 }) => {

    const [projectsData, setProjectsData] = useState<ProjectData[]>(projects.projects)

    useEffect(() => {
        const highlightedProjects: ProjectData[] = pickHighlightedProjects(projects.projects)
        setProjectsData(organizeByDate(highlightedProjects))
    }, [])

    function pickHighlightedProjects(projects: ProjectData[]): ProjectData[] {
        return projects.filter(project => project.highlight)
    }

    function organizeByDate(projects: ProjectData[]): ProjectData[] {
        return projects.sort((a, b) => {
            const yearA = a.madeAt?.year ?? 0
            const yearB = b.madeAt?.year ?? 0
            return yearB - yearA
        })
    }

    const viewAll: string[] = [
        'See all projects',
        'Ver todos os projetos'
    ]

    return (
        <section className='flex flex-col gap-8'>
            <motion.h2
                key={`projects` + languagePos}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: INITIAL_DELAY }}
                className='text-base font-bold uppercase'
            >
                {projects.title[languagePos]}
            </motion.h2>
            {projectsData.map((project, index) => (
                <Project key={project.id} project={project} DELAY={INITIAL_DELAY + index * 0.45} languagePos={languagePos} />
            ))}
            <motion.a
                key={`see-all` + languagePos}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: INITIAL_DELAY + projects.projects.length * 0.45 }}
                className='w-fit flex gap-1'
                //TODO: link to another sub-page
                href={`/files/pedro-${languagePos === 0 ? 'en' : 'pt'}.pdf`}
                target='_blank'
                rel='noreferrer'
            >
                <p className='text-sm font-normal underline cursor-pointer'>
                    {viewAll[languagePos]}
                </p>
                <Link size={12} />
            </motion.a>
        </section>
    )
}

export { Projects }
