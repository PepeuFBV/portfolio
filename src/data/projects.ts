import { ProjectsT, ProjectData } from '@/types/types'

const projects: ProjectsT = {
    title: [
        'Personal Projects',
        'Projetos Pessoais'
    ],
    projects: [
        {
            id: 0,
            name: 'Kotacts',
            description: [
                'A simple android application written in the Kotlin language that allows you to manage your contacts in which you can save a name, picture, phone number and email. You can also add, edit and delete contacts.',
                'Uma aplicação android simples escrita na linguagem Kotlin que permite gerenciar seus contatos, onde você pode salvar um nome, foto, número de telefone e email. Você também pode adicionar, editar e excluir contatos.'
            ],
            madeAt: {
                month: 10,
                year: 2024
            },
            link: 'https://github.com/PepeuFBV/Kontacts',
            tags: [
                [
                    'Kotlin',
                    'Android',
                    'Jetpack Compose',
                    'Mobile Development'
                ],
                [
                    'Kotlin',
                    'Android',
                    'Jetpack Compose',
                    'Desenvolvimento Mobile'
                ]
            ]
        },
        {
            id: 1,
            name: 'Cache Eviction',
            description: [
                'Client/server simulation for storing service orders, whilst using a cache to speed up the search for the service orders in the database.',
                'Simulação cliente/servidor para armazenar ordens de serviço, utilizando um cache para acelerar a busca das ordens de serviço no banco de dados.'
            ],
            madeAt: {
                month: 10,
                year: 2024
            },
            link: 'https://github.com/PepeuFBV/Cache-Eviction',
            tags: [
                [
                    'Java',
                    'Data-structures',
                    'Cache',
                ],
                [
                    'Java',
                    'Estruturas de Dados',
                    'Cache',
                ]
            ]
        },
        {
            id: 2,
            name: 'Movie Recommendation',
            description: [
                'Developing a movie recommendation algorithm based on scores, aiming to suggest titles to users based on their previous ratings and liking\'s. The goal is to identify which movies or series a user is likely to enjoy, assigning a score to each title based on their behavior and preferences.',
                'Desenvolver um algoritmo de recomendação de filmes baseado em notas, com o objetivo de sugerir títulos aos usuários com base em suas avaliações e gostos anteriores. O objetivo é identificar quais filmes ou séries um usuário provavelmente vai gostar, atribuindo uma nota a cada título com base em seu comportamento e preferências.'
            ],
            madeAt: {
                month: 10,
                year: 2024
            },
            link: 'https://github.com/PepeuFBV/Movie-Recommendation',
            tags: [
                [
                    'Python',
                    'Machine Learning',
                    'Data Analysis',
                    'Sklearn',
                ],
                [
                    'Python',
                    'Machine Learning',
                    'Análise de Dados',
                    'Sklearn',
                ]
            ],
            highlight: true
        },
        {
            id: 3,
            name: 'Upgrading Mars',
            description: [
                'A modification of the Mars software for the MIPS architecture, corresponding to part of the operating system infrastructure to perform process management, such as creation of Syscalls, PCB, and process scheduling.',
                'Uma modificação do software Mars para a arquitetura MIPS, correspondente a parte da infraestrutura de sistema operacional para realizar gerenciamento de processos, como criação de Syscalls, PCB e escalonamento de processos.'
            ],
            madeAt: {
                month: 4,
                year: 2024
            },
            link: 'https://github.com/PepeuFBV/Updating_mars',
            tags: [
                [
                    'Java',
                    'MIPS',
                    'Operating Systems',
                ],
                [
                    'Java',
                    'MIPS',
                    'Sistemas Operacionais',
                ]
            ],
            highlight: true
        },
        {
            id: 4,
            name: 'https://github.com/PepeuFBV/MNIST_Classification',
            description: [
                'Developing a simple neural network to classify handwritten digits from the MNIST dataset, using TensorFlow.',
                'Desenvolver uma rede neural simples para classificar dígitos manuscritos do conjunto de dados MNIST, utilizando a biblioteca TensorFlow.'
            ],
            madeAt: {
                month: 12,
                year: 2023
            },
            link: 'https://github.com/PepeuFBV/MNIST_Classification',
            tags: [
                [
                    'Python',
                    'Machine Learning',
                    'TensorFlow',
                ],
                [
                    'Python',
                    'Machine Learning',
                    'TensorFlow',
                ]
            ],
            highlight: true
        }
    ]
}

export { projects }
