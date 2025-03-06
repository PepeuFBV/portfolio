import { Job } from '@/types/types'

interface ExperienceContent {
    title: string[],
    jobs: Job[]
}
const experience: ExperienceContent = {
    title: [
        'Experience',
        'Experiência'
    ],
    jobs: [ // TODO: adicionar certificados
        {
            id: 0,
            title: [
                'Extension Team Leader',
                'Líder de Equipe de Extensão'
            ],
            company: [
                'UFERSA - Extension Project',
                'UFERSA - Projeto de Extensão'
            ],
            companyLink: 'https://www.ufersa.edu.br/',
            projectLink: null,
            description: [
                'Responsible for coordinating a team of volunteer students for the organization of events aimed at computer science students. Developed networking, website development and website deployment skills.',
                'Bolsista responsável por coordenar equipe de alunos voluntários para a organização de eventos voltados para alunos do curso. Desenvolvi habilidades de networking e de desenvolvimento e deploy de websites com sistema de inscrição.'
            ],
            date: {
                start: {
                    month: 7,
                    year: 2023
                },
                end: {
                    month: 4,
                    year: 2024
                }
            },
            tags: [
                ['ReactJS', 'NextJS', 'TailwindCSS', 'Firebase', 'Team Management'],
                ['ReactJS', 'NextJS', 'TailwindCSS', 'Firebase', 'Gestão de Equipe']
            ]
        },
        {
            id: 1,
            title: [
                'Hackatruck Student',
                'Aluno do Hackatruck'
            ],
            company: [
                'IBM - Hackatruck',
                'IBM - Hackatruck'
            ],
            companyLink: 'https://hackatruck.com.br',
            projectLink: null,
            description: [
                'Selected student to participate in the course Practice of Cloud Services using Swift with Emphasis on Cognitive Services, in which a digital solution prototype was designed and developed in Swift language in a 100-hour workload.',
                'Aluno selecionado para participar do curso Prática de Cloud Services usando Swift com Ênfase em Serviços Cognitivos, em que foi idealizada, projetada e desenvolvida um protótipo de solução digital na linguagem Swift em uma carga horária de 100 horas.'
            ],
            date: {
                start: {
                    month: 10,
                    year: 2023
                },
                end: {
                    month: 11,
                    year: 2023
                }
            },
            tags: [
                ['SwiftUI', 'IBM Cloud', 'Cognitive Services', 'Prototyping', 'Node-RED'],
                ['SwiftUI', 'IBM Cloud', 'Serviços Cognitivos', 'Prototipagem', 'Node-RED']
            ]
        },
        {
            id: 2,
            title: [
                'Hackathon Winner',
                'Vencedor de Hackathon'
            ],
            company: [
                'Sábia Institute',
                'Instituto Sábia'
            ],
            companyLink: 'https://plataformasabia.com',
            projectLink: null,
            description: [
                'Winner of Hackathon das Rotas promoted by Instituto Sábia, in which an innovative solution containing AI was designed, for the \'Caminho do Mel\' (problems in the beekeeping).',
                'Vencedor de Hackathon das Rotas, promovido pelo Instituto Sábia, em que foi idealizada, em uma semana, uma solução inovadora, em que haja o uso de IA, para o \'Caminho do Mel\' (problemas na área da apicultura).'
            ],
            date: {
                start: {
                    month: 9,
                    year: 2024
                },
                end: null,
                singleDate: true
            },
            tags: [
                ['AI', 'Prototyping', 'Problem Solving', 'Teamwork', 'Pitch'],
                ['IA', 'Prototipagem', 'Resolução de Problemas', 'Trabalho em Equipe', 'Pitch']
            ]
        },
        {
            id: 3,
            title: [
                'Undergraduate Research in Startup',
                'Iniciação Científica em Startup'
            ],
            company: [
                'SmartRural - UFRPE',
                'SmartRural - UFRPE'
            ],
            companyLink: 'https://www.smartrural.com.br',
            projectLink: null,
            description: [
                'Currently a scholarship holder participating in the development of systems aimed at monitoring IoT devices. The goal is the investigation and implementation of a computational architecture for intelligent management systems of production environments in aquaculture 4.0.',
                'Atualmente bolsista participando do desenvolvimento de sistemas voltados para o monitoramento de dispositivos IoT. O objetivo é a investigação e implementação de uma arquitetura computacional para sistemas de manejo inteligente de ambientes de produção em aquicultura 4.0.'
            ],
            date: {
                start: {
                    month: 10,
                    year: 2024
                },
                end: null
            },
            tags: [
                ['IoT', 'NextJS', 'Django', 'Flutter', 'Real-time Systems'],
                ['IoT', 'NextJS', 'Django', 'Flutter', 'Sistemas em Tempo Real']
            ]
        },
        // {
        //     id: 4,
        //     title: [
        //         'President Director of Junior Company',
        //         'Diretor Presidente de Empresa Júnior'
        //     ],
        //     company: [
        //         'LótusTech - UFERSA',
        //         'LótusTech - UFERSA'
        //     ],
        //     companyLink: null,
        //     description: [
        //         'President Director of the Junior Company of Computer Science at UFERSA, in which I developed skills in people and project management, leadership and networking.',
        //         'Diretor Presidente da Empresa Júnior de Ciência de Computação da UFERSA, em que desenvolvi habilidades de gestão de pessoas e de projetos, além de liderança e networking.'
        //     ],
        //     date: {
        //         start: {
        //             month: 6,
        //             year: 2024
        //         },
        //         end: {
        //             month: 12,
        //             year: 2024
        //         }
        //     }
        // },
        {
            id: 5,
            title: [
                'ReactJS Mini-Course Instructor',
                'Ministrante de minicurso sobre ReactJS'
            ],
            company: [
                'CAPCOM - UFERSA',
                'CAPCOM - UFERSA'
            ],
            companyLink: null,
            projectLink: 'https://github.com/PepeuFBV/react-para-iniciantes',
            description: [
                'Mini-course teacher on ReactJS for Computer Science students at UFERSA, in which I developed skills in public speaking and teaching skills, as well as deep learning about the technology.',
                'Ministrei minicurso sobre ReactJS para alunos do curso de Ciência da Computação da UFERSA, em que desenvolvi habilidades de oratória, de ensino e aprendizado aprofundado sobre a tecnologia.'
            ],
            date: {
                start: {
                    month: 10,
                    year: 2024
                },
                end: null,
                singleDate: true
            },
            tags: [
                ['ReactJS', 'Teaching', 'Public Speaking', 'Documentation'],
                ['ReactJS', 'Ensino', 'Oratória', 'Documentação']
            ]
        },
        {
            id: 6,
            title: [
                'Project Analyst',
                'Analista de Projetos'
            ],
            company: [
                'Seed a Bit - UFRPE',
                'Seed a Bit - UFRPE'
            ],
            companyLink: 'https://www.seedabit.org.br',
            projectLink: null,
            description: [
                'Project Analyst at Seed a Bit, UFRPE junior company, contributing to large-scale projects in web development, backend, frontend, and API development. Demonstrated proficiency in Git for seamless team collaboration, and effectively utilized DevOps tools and practices for continuous integration and deployment, ensuring efficient and high-quality project outcomes.',
                'Analista de Projetos na empresa júnior Seed a Bit da UFRPE, participando de projetos de larga escala nas áreas de desenvolvimento web, backend, frontend e APIs. Demonstração de proficiência no uso do Git para colaboração eficaz em equipe, utilizando ferramentas e práticas de DevOps para integração e implantação contínuas, garantindo resultados de projeto eficientes e de alta qualidade.'
            ],
            date: {
                start: {
                    month: 2,
                    year: 2025
                },
                end: null
            },
            tags: [
                ['ReactJS', 'NodeJS', 'Express', 'Git', 'DevOps'],
                ['ReactJS', 'NodeJS', 'Express', 'Git', 'DevOps']
            ]
        }
    ]
}

export { experience }
