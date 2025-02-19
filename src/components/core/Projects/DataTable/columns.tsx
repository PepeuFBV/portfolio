'use client'

import { ColumnDef } from '@tanstack/react-table'
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
        },
        {
            accessorKey: 'description',
            header: headers.description[languagePos],
        },
        {
            accessorKey: 'tags',
            header: headers.tags[languagePos],
        },
        {
            accessorKey: 'link',
            header: headers.link[languagePos],
        }
    ]
}
