'use client'

import React, { useState, useEffect } from 'react'
import { Job } from '@/components/core/Experience/Job'
import { experience as initialExperience } from '@/data/experience'
import { getLanguagePos } from '@/utils/language-handler'
import { motion } from 'framer-motion'

const DELAY_MULTIPLIER = 0.45

interface ExperienceProps {
    INITIAL_DELAY?: number
}
const Experience: React.FC<ExperienceProps> = ({ INITIAL_DELAY = 0.0 }) => {
    const languagePos = getLanguagePos()

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

    return (
        <section className='flex flex-col gap-8'>
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: INITIAL_DELAY }}
                className='text-base font-bold uppercase'
            >
                {experience.title[languagePos]}
            </motion.h2>
            {experience.jobs.map((job, index) => (
                <Job key={index} job={job} DELAY={INITIAL_DELAY + index * DELAY_MULTIPLIER} />
            ))}
        </section>
    )
}

export { Experience }