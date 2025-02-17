import React from 'react'
import { Link } from '@/components/core/Icons/components/link'
import { Dates } from '@/components/core/Experience/Job/Dates'
import type { Job } from '@/types/types'
import { getLanguagePos } from '@/utils/language-handler'
import '@/components/core/Experience/Job/truncate-desc.css'

interface JobProps {
    key: number
    job: Job
}
const Job: React.FC<JobProps> = ({ key, job }) => { // TODO: order jobs by date + order tags by name
    const languagePos = getLanguagePos()

    return (
        <div key={key} className='flex flex-row gap-3 hover:bg-slate-900 hover:bg-opacity-15 hover:shadow p-3 rounded-xl h-32'>
            <Dates dates={job.date} />
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
        </div>
    )
}

export { Job }
