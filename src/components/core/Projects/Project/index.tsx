'use client'

import React from 'react'
import Image from 'next/image'
import { Github } from '@/components/core/Icons/components/github'
import { Link } from '@/components/core/Icons/components/link'
import type { ProjectData } from '@/types/types'
import { Date } from '@/components/core/Projects/Project/Date'
import { motion } from 'framer-motion'

interface ProjectProps {
    project: ProjectData
    DELAY?: number
    languagePos?: number
}
const Project: React.FC<ProjectProps> = ({ project, DELAY = 0.0, languagePos = 0 }) => {
    const orderedTags: string[] = project.tags ? project.tags[languagePos].sort((a, b) => a.localeCompare(b)) : []

    return (
        <motion.a
            key={`Job` + languagePos}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: DELAY }}
            className='grid grid-cols-12 gap-3 hover:bg-slate-700 hover:bg-opacity-15 hover:shadow p-3 rounded-xl h-40'
            href={project.link}
            target='_blank'
            rel='noreferrer'
        >
            <div className='col-span-4 md:max-lg:col-span-3 relative h-full w-full overflow-hidden rounded-xl'>
                <Image
                    src={project.picture || ''}
                    alt={project.name}
                    fill
                    quality={100}
                    loading='lazy'
                    className='w-full object-cover'
                />
            </div>
            <div className='col-span-8 md:max-lg:col-span-9 flex flex-col justify-between mb-1 gap-2 lg:gap-0'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='h-full flex gap-2'>
                            <h3 className='text-base font-bold'>
                                {project.name}
                            </h3>
                            {project.link.startsWith('https://github.com') ? (
                                <Github
                                    size={24}
                                    href={project.link}
                                />
                            ) : (
                                <Link
                                    size={26}
                                    href={project.link}
                                />
                            )}
                        </div>
                        <Date date={project.madeAt} languagePos={languagePos} />
                    </div>
                    <p className='text-xs truncate-description'>{project.description[languagePos]}</p>
                </div>
                <div className='flex flex-row gap-2'>
                    {orderedTags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs font-light dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 p-1 rounded'>{tag}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.a >
    )
}

export { Project }
