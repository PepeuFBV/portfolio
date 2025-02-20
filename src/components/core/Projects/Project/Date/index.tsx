import type { MonthYear } from '@/types/types'

interface DateProps {
    date?: MonthYear,
    languagePos?: number
}
const Date: React.FC<DateProps> = ({ date, languagePos = 0 }) => {
    if (!date) return null

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

    return (
        <div className='uppercase text-xs dark:font-light dark:text-zinc-400 mt-2'>
            <span>{dateNameMapping[date.month ?? 1][languagePos]} {date.year}</span>
        </div>
    )

}

export { Date }
