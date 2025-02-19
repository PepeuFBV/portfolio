import type { DateRange } from '@/types/types'

interface DatesProps {
    dates: DateRange | null
    languagePos?: number
}
const Dates: React.FC<DatesProps> = ({ dates, languagePos = 0 }) => {
    if (!dates) return null

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

    if (dates.start) {
        if (dates.end) {
            if (dates.start.year === dates.end.year) {
                return (
                    <div className='min-w-28 uppercase text-xs font-light text-zinc-400 mt-2'>
                        <span>{dateNameMapping[dates.start.month ?? 1][languagePos]} - {dateNameMapping[dates.end.month ?? 1][languagePos]} {dates.start.year}</span>
                    </div>
                )
            } else {
                return (
                    <div className='min-w-28 uppercase text-xs font-light text-zinc-400 mt-2'>
                        <span>{dates.start.year} - {dates.end.year}</span>
                    </div>
                )
            }
        } else {
            if (dates.singleDate) {
                return (
                    <div className='min-w-28 uppercase text-xs font-light text-zinc-400 mt-2'>
                        <span>{dateNameMapping[dates.start.month ?? 1][languagePos]} {dates.start.year}</span>
                    </div>
                )
            } else {
                return (
                    <div className='min-w-28 uppercase text-xs font-light text-zinc-400 mt-2'>
                        <span>{dates.start.year} - {languagePos === 0 ? 'Present' : 'Atual'}</span>
                    </div>
                )
            }
        }
    } else {
        return null
    }
}

export { Dates }
