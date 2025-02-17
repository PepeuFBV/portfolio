'use client'

import React from 'react'
import { Link } from '@/components/core/Icons/components/link'
import { Dates } from '@/components/core/Experience/Job/Dates'
import type { Job } from '@/types/types'
import { getLanguagePos } from '@/utils/language-handler'
import { motion } from 'framer-motion'
import '@/components/core/Experience/Job/truncate-desc.css'

interface JobProps {
    key: number
    job: Job
    DELAY?: number
}
const Job: React.FC<JobProps> = ({ key, job, DELAY = 0.0 }) => {
    const languagePos = getLanguagePos()

    const orderedTags: string[] = job.tags ? job.tags[languagePos].sort((a, b) => a.localeCompare(b)) : []

    return (
        <motion.div
            key={key}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: DELAY }}
            className='flex flex-row gap-3 hover:bg-slate-900 hover:bg-opacity-15 hover:shadow p-3 rounded-xl h-40'
        >
            <Dates dates={job.date} />
            <div className='flex flex-col justify-between mb-1 w-full'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-[0.05rem]'>
                        {job.projectLink && job.companyLink ? ( // both links present
                            <>
                                <a className='flex gap-1' href={job.projectLink} target='_blank' rel='noreferrer'>
                                    <h3 className='text-base font-bold'>{job.title[languagePos]}</h3>
                                    <Link size={17} />
                                </a>
                                <a className='w-fit flex gap-[0.125rem]' href={job.companyLink} target='_blank' rel='noreferrer'>
                                    <p className='w-fit text-xs font-light text-zinc-400'>{job.company[languagePos]}</p>
                                    <Link size={11} />
                                </a>
                            </>
                        ) : job.companyLink ? ( // only company link present
                            <>
                                <h3 className='text-base font-bold'>{job.title[languagePos]}</h3>
                                <a className='w-fit flex gap-[0.125rem]' href={job.companyLink} target='_blank' rel='noreferrer'>
                                    <p className='w-fit text-xs font-light text-zinc-400'>{job.company[languagePos]}</p>
                                    <Link size={11} />
                                </a>
                            </>
                        ) : job.projectLink ? ( // only project link present (CORRECT)
                            <>
                                <a className='flex gap-1' href={job.projectLink} target='_blank' rel='noreferrer'>
                                    <h3 className='text-base font-bold'>{job.title[languagePos]}</h3>
                                    <Link size={17} />
                                </a>
                                <p className='w-fit text-xs font-light text-zinc-400'>{job.company[languagePos]}</p>
                            </>
                        ) : ( // no links present
                            <>
                                <h3 className='text-base font-bold'>{job.title[languagePos]}</h3>
                                <p className='text-xs font-light text-zinc-400'>{job.company[languagePos]}</p>
                            </>
                        )}
                    </div>
                    <p className='text-xs truncate-description'>{job.description[languagePos]}</p>
                </div>
                <div className='flex flex-row gap-2'>
                    {orderedTags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs font-light text-zinc-400'>{tag}</p>
                            {index < orderedTags.length - 1 && <p className='text-xs font-light text-zinc-400'> · </p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export { Job }
