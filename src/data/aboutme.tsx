import { ReactNode } from 'react'

type AboutMeContent = {
    name: string,
    role: string[],
    smallDescription: ReactNode[],
    descriptionTitle: string[],
    description1: ReactNode[],
    description2: ReactNode[],
    description3: ReactNode[],
    descriptionExtra: ReactNode[]
}
const aboutme: AboutMeContent = {
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
    descriptionTitle: [
        'About me',
        'Sobre mim'
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
    ],
    description3: [
        <>
            Currently, I'm working as a fullstack software developer and researcher at <a className='underline hover:text-blue-800 visited:text-purple-600' href="https://www.smartrural.com.br" target="_blank" rel="noreferrer">SmartRural</a>, developing a real-time monitoring system for IoT devices in the aquiculture sector.
        </>,
        <>
            Atualmente, estou trabalhando como desenvolvedor de software fullstack e pesquisador na <a className='underline hover:text-blue-800 visited:text-purple-600' href="https://www.smartrural.com.br" target="_blank" rel="noreferrer">SmartRural</a>, desenvolvendo um sistema de monitoramento em tempo real para dispositivos IoT no setor de aquicultura.
        </>
    ],
    descriptionExtra: [
        <>
            I'm always looking for new challenges and opportunities to learn and improve my skills. I love learing new languages, frameworks and tools to create better solutions and improve my knowledge. Currently learning <b>Rust</b> and <b>Golang</b>.
        </>,
        <>
            Estou sempre em busca de novos desafios e oportunidades para aprender e aprimorar minhas habilidades. Adoro aprender novas linguagens, frameworks e ferramentas para criar soluções melhores e aprimorar meu conhecimento. Atualmente aprendendo <b>Rust</b> e <b>Golang</b>.
        </>
    ]
}

export { aboutme }
