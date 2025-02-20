'use client'

import React from 'react'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import type { ProjectData } from '@/types/types'
import { motion } from 'framer-motion'
import { cn } from '@/utils/tailwind-merge'

interface DataTableProps<TData, TValue> {
    className?: string
    columns: ColumnDef<TData, TValue>[]
    projects: TData[]
}
const DataTable: React.FC<DataTableProps<ProjectData, any>> = ({ className = '', columns, projects }) => {
    const table = useReactTable<ProjectData>({
        data: projects,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn('', className)}
        >
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableCell key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </motion.div>
    )
}

export { DataTable }
