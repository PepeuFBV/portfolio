import React, { ReactNode } from 'react'
import Image from 'next/image'
import { getLanguagePos } from '@/utils/language-handler'
import * as motion from 'motion/react-client'

const data: { title: ReactNode[], role: ReactNode[], description1: ReactNode[], description2: ReactNode[] } = {
    title: [
        'Welcome, I\'m Pedro Figueira',
        'Bem vindo, eu sou Pedro Figueira'
    ],
    role: [
        'Junior Developer',
        'Desenvolvedor Junior'
    ],
    description1: [
        <>
            Developer with experience in the development of APIs, system integration, databases and web systems creation. Working with <b>scalable</b> and <b>efficient</b> architectures, ensuring secure and high-performance solutions.
        </>,
        <>
            Sou um desenvolvedor com experiência no desenvolvimento de APIs, integração de sistemas, bancos de dados e criação de sistemas web. Trabalhando com arquiteturas <b>escaláveis</b> e <b>eficientes</b>, garantindo soluções seguras e de alta performance.
        </>
    ],
    description2: [
        <>
            Experienced in agile methodologies such as Scrum, valuing teamwork and <b>continuous delivery</b> of value. Focused on good development practices, combining technical knowledge and a practical approach to create solutions that meet business needs in an <b>agile</b> and <b>effective</b> way.
        </>,
        <>
            Experiênte em metodologias ágeis como Scrum, valorizando a colaboração em equipe e a <b>entrega contínua</b> de valor. Com foco em boas práticas de desenvolvimento, aliando conhecimento técnico e uma abordagem prática para criar soluções que atendem às necessidades do negócio de forma <b>ágil</b> e <b>eficaz</b>.
        </>
    ]
}

const Home = () => {
    const languagePos = getLanguagePos()

    return (
        <section className='grid grid-cols-2 place-items-center w-[80%] h-full'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex flex-col items-center gap-2'
            >
                <Image src="/pedro.jpg" alt="Logo" width={350} height={350} loading='eager' quality={100} className='rounded-2xl' />
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='font-extralight'
                >
                    {data.role[languagePos]}
                </motion.p>
            </motion.div>
            <div className='flex flex-col items-center gap-4'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='text-3xl font-bold'
                >
                    {data.title[languagePos]}
                </motion.h1>
                <div className='flex flex-col gap-2 text-center'>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        {data.description1[languagePos]}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.25 }}
                    >
                        {data.description2[languagePos]}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Home
