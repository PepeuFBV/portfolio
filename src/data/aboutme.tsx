import { ReactNode } from 'react'

const aboutme: { name: string, role: string[], smallDescription: ReactNode[], description1: ReactNode[], description2: ReactNode[] } = {
    name: "Pedro Figueira",
    role: [
        'Junior Developer',
        'Desenvolvedor Junior'
    ],
    smallDescription: [
        <>
            Building efficient and scalable solutions to meet business needs.
        </>,
        <>
            Construindo soluções eficientes e escaláveis para atender às necessidades do negócio.
        </>
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
            Experiente em metodologias ágeis como Scrum, valorizando a colaboração em equipe e a <b>entrega contínua</b> de valor. Com foco em boas práticas de desenvolvimento, aliando conhecimento técnico e uma abordagem prática para criar soluções que atendem às necessidades do negócio de forma <b>ágil</b> e <b>eficaz</b>.
        </>
    ]
}

export { aboutme }
