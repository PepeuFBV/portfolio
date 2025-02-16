import React from 'react'
import { FileText } from 'lucide-react'
import { getLanguagePos } from '@/utils/language-handler'

interface CurriculumProps {
    size?: number
}
const Curriculum: React.FC<CurriculumProps> = ({ size = 24 }) => {
    const languagePos = getLanguagePos()

    const filepath = `/files/pedro-${languagePos === 0 ? 'pt' : 'en'}.pdf`

    return (
        <a href={filepath} target='_blank'>
            <FileText size={size} />
        </a>
    )
}

export { Curriculum }
