'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Github } from '@/components/core/Icons/components/github'
import { Link } from '@/components/core/Icons/components/link'
import type { ProjectData } from '@/types/types'

interface ColumnsProps {
    languagePos: number;
}
export const getColumns = ({ languagePos }: ColumnsProps): ColumnDef<ProjectData>[] => {
    const headers = {
        year: ['Year', 'Ano'],
        project: ['Project', 'Projeto'],
        description: ['Description', 'Descrição'],
        tags: ['Built with', 'Construído com'],
        link: ['Link', 'Link']
    }

    return [
        {
            accessorKey: 'year',
            header: headers.year[languagePos],
            cell: ({ row }) => {
                const dateNameMapping: { [key: number]: string[] } = {
                    1: ['Jan', 'Jan'],
                    2: ['Feb', 'Fev'],
                    3: ['Mar', 'Mar'],
                    4: ['Apr', 'Abr'],
                    5: ['May', 'Mai'],
                    6: ['Jun', 'Jun'],
                    7: ['Jul', 'Jul'],
                    8: ['Aug', 'Ago'],
                    9: ['Sept', 'Set'],
                    10: ['Oct', 'Out'],
                    11: ['Nov', 'Nov'],
                    12: ['Dec', 'Dez']
                }
                const month: number = row.original.madeAt?.month || 0
                const year: number = row.original.madeAt?.year || 0
                return `${dateNameMapping[month][languagePos]} ${year}`
            }
        },
        {
            accessorKey: 'name',
            header: headers.project[languagePos],
            cell: ({ row }) => {
                return (
                    <p className=' font-semibold'>{row.original.name}</p>
                )
            }
        },
        {
            accessorKey: 'description',
            header: headers.description[languagePos],
            cell: ({ row }) => {
                const descriptions: string[] = row.original.description
                return descriptions[languagePos]
            }
        },
        {
            accessorKey: 'tags',
            header: headers.tags[languagePos],
            cell: ({ row }) => {
                return (
                    <div className='flex flex-wrap'>
                        {row.original.languagesAndFrameworks?.map((name: string, index: number) => (
                            <div key={index} className='w-fit bg-zinc-900 rounded-full px-2 py-1 m-1 text-nowrap'>
                                {name}
                            </div>
                        ))}
                    </div>
                )
            }
        },
        {
            accessorKey: 'link',
            header: headers.link[languagePos],
            cell: ({ row }) => {
                const link: string = row.original.link
                if (link.startsWith('https://github.com')) {
                    return (
                        <Github
                            size={24}
                            href={link}
                        />
                    )
                } else {
                    return (
                        <Link
                            href={link}
                        />
                    )
                }
            }
        }
    ]
}
