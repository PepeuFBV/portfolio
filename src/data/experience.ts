import { Job } from '@/types/types'

interface ExperienceContent {
    title: string[],
    jobs: Job[]
}
const experience: ExperienceContent =  {
    title: [
        'Experience',
        'Experiência'
    ],
    jobs: [ // TODO: adicionar certificados
        {
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
                'Winner of Hackathon das Rotas, promoted by Instituto Sábia, in which an innovative solution was designed, containing AI, for the \'Caminho do Mel\' (problems in the beekeeping).',
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
                'Mini-course teacher on ReactJS for Computer Science students at UFERSA, in which I developed skills in public speaking and teaching skills, as well as, deep learning about the technology.',
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
            title: [
                'Marketing Analyst',
                'Analista de Marketing'
            ],
            company: [
                'Seed a Bit - UFRPE',
                'Seed a Bit - UFRPE'
            ],
            companyLink: 'https://www.seedabit.org.br',
            projectLink: null,
            description: [
                'Marketing Analyst at the Seed a Bit startup, in which I developed skills in digital marketing, content creation and social media management.',
                'Analista de Marketing na startup Seed a Bit, em que desenvolvi habilidades em marketing digital, criação de conteúdo e gerenciamento de redes sociais.'
            ],
            date: {
                start: {
                    month: 2,
                    year: 2025
                },
                end: null
            },
            tags: [
                ['Digital Marketing', 'Social Media', 'Analytics', 'Client Prospecting'],
                ['Marketing Digital', 'Redes Sociais', 'Análise de Dados', 'Prospecção de Clientes']
            ]
        }
    ]
}

export { experience }
