'use client'

import React, { useState, useEffect } from 'react'
import { FileText } from 'lucide-react'
import { useAppContext } from '@/context/context'
import loadAssetUrl from '@/utils/load-asset-url'

interface CurriculumProps {
    size?: number,
}
const Curriculum: React.FC<CurriculumProps> = ({ size = 24 }) => {
    const { languagePos } = useAppContext()
    const [filepath, setFilepath] = useState<string>(loadAssetUrl('/files/pedro-'))

    useEffect(() => {
        if (languagePos === 0) {
            setFilepath(loadAssetUrl('/files/pedro-en.pdf'))
        } else {
            setFilepath(loadAssetUrl('/files/pedro-pt.pdf'))
        }
    }, [languagePos])

    return (
        <a href={filepath} target='_blank' rel='noreferrer noopener'>
            <FileText size={size} />
        </a>
    )
}

export { Curriculum }
