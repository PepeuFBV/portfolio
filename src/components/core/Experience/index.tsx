import React from 'react'
import { Job } from '@/components/core/Experience/Job'
import { experience } from '@/data/experience'
import { getLanguagePos } from '@/utils/language-handler'

const Experience = () => {
    const languagePos = getLanguagePos()

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

    experience.jobs = organizeByDate(experience.jobs)

    return (
        <section className='flex flex-col gap-8'>
            <h2 className='text-base font-bold uppercase'>{experience.title[languagePos]}</h2>
            {experience.jobs.map((job, index) => (
                <Job key={index} job={job} />
            ))}
        </section>
    )
}

export { Experience }