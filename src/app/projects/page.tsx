'use client'

import React from 'react'
import { DataTable } from '@/components/core/Projects/DataTable'
import { MoveLeft } from '@/components/core/Icons/components/move-left'
import { projects } from '@/data/projects'
import { aboutme } from '@/data/aboutme'
import { getColumns } from '@/components/core/Projects/DataTable/columns'
import { motion, Variants } from 'framer-motion'
import { useAppContext } from '@/context/context'

export default function ProjectsPage() {
    const { languagePos } = useAppContext()
    const columns = getColumns({ languagePos })

    const arrowAnimationVariants: Variants = {
        initial: { opacity: 0, x: -20, transition: { duration: 0.3 } },
        animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        hover: { x: -7 }
    }

    return (
        <main className="flex flex-col h-screen w-full items-start justify-start px-12 lg:px-20 xl:px-32 py-20 lg:py-36 gap-8">
            <div className='flex flex-col space-y-2'>
                <motion.a
                    initial='initial'
                    animate='animate'
                    whileHover='hover'
                    className='w-fit flex items-center justify-center space-x-1'
                    href="/"
                >
                    <MoveLeft size={24} animate animationVariants={arrowAnimationVariants} className='h-full' />
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className='text-base font-extralight'
                    >
                        {aboutme.name}
                    </motion.p>
                </motion.a>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className='text-4xl'
                >
                    {projects.title[languagePos]}
                </motion.h2>
            </div>
            <DataTable projects={projects.projects} columns={columns} />
        </main>
    )
}
