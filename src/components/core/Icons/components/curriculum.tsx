'use client'

import React, { useState, useEffect } from 'react'
import { FileText } from 'lucide-react'
import { useAppContext } from '@/context/context'

interface CurriculumProps {
    size?: number,
}
const Curriculum: React.FC<CurriculumProps> = ({ size = 24 }) => {
    const { languagePos } = useAppContext()
    const [filepath, setFilepath] = useState<string>('/files/pedro-')

    useEffect(() => {
        if (languagePos === 0) {
            setFilepath('/files/pedro-en.pdf')
        } else {
            setFilepath('/files/pedro-pt.pdf')
        }
    }, [languagePos])

    return (
        <a href={filepath} target='_blank'>
            <FileText size={size} />
        </a>
    )
}

export { Curriculum }
