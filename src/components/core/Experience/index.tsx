'use client'

import React, { useState, useEffect } from 'react'
import { Job } from '@/components/core/Experience/Job'
import { Link } from '@/components/core/Icons/components/link'
import { experience as initialExperience } from '@/data/experience'
import { motion } from 'framer-motion'
import loadAssetUrl from '@/utils/load-asset-url'

const DELAY_MULTIPLIER = 0.45

interface ExperienceProps {
    INITIAL_DELAY?: number
    languagePos?: number
}
const Experience: React.FC<ExperienceProps> = ({ INITIAL_DELAY = 0.0, languagePos = 0 }) => {
    const [experience, setExperience] = useState(initialExperience)

    useEffect(() => {
        const organizedJobs: Job[] = organizeByDate(initialExperience.jobs)
        setExperience({ ...initialExperience, jobs: organizedJobs })
    }, [])

    function organizeByDate(jobs: Job[]): Job[] {
        return jobs.sort((a, b) => {
            if (!a.date?.end && !a.date?.singleDate) return -1
            if (!b.date?.end && !b.date?.singleDate) return 1

            if (a.date?.start?.year !== b.date?.start?.year) {
                return (b.date?.start?.year || 0) - (a.date?.start?.year || 0)
            }
            return (b.date?.start?.month || 0) - (a.date?.start?.month || 0)
        })
    }

    const viewAll: string[] = [
        'See full CV',
        'Ver currículo completo'
    ]

    return (
        <section className='flex flex-col gap-8' id='experience'>
            <motion.h2
                key={`experience` + languagePos}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: INITIAL_DELAY }}
                className='text-base font-bold uppercase'
            >
                {experience.title[languagePos]}
            </motion.h2>
            {experience.jobs.map((job, index) => (
                <Job key={job.id} job={job} DELAY={INITIAL_DELAY + index * DELAY_MULTIPLIER} languagePos={languagePos} />
            ))}
            <motion.a
                key={`see-all` + languagePos}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: INITIAL_DELAY + experience.jobs.length * DELAY_MULTIPLIER }}
                className='w-fit flex gap-1'
                href={loadAssetUrl(`/files/pedro-${languagePos === 0 ? 'en' : 'pt'}.pdf`)}
                target='_blank'
                rel='noreferrer'
            >
                <p className='text-sm font-normal underline cursor-pointer'>
                    {viewAll[languagePos]}
                </p>
                <Link size={14} />
            </motion.a>
        </section>
    )
}

export { Experience }
