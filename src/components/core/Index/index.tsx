'use client'

import React from 'react'
import { indexOptions } from '@/data/index-options'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import './line.css'

const INITIAL_DELAY = 0.4

const Index = () => {
    return (
        <nav className='hidden lg:flex flex-col gap-4'>
            {indexOptions.map((option, index) => (
                <motion.div
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: INITIAL_DELAY + index * 0.4 }}
                    className='text-lg dark:text-zinc-400'
                >
                    <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='w-fit'
                    >
                        <Link
                            to={option.link}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className='hover:underline cursor-pointer link-with-line'
                            activeClass="active"
                            spy
                        >
                            {option.name}
                        </Link>
                    </motion.div>
                </motion.div>
            ))}
        </nav>
    )
}

export { Index }
