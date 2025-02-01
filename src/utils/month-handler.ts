import { getLanguage } from "@/utils/language-handler"

const months: { [key: string]: string[] } = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
}

function getMonthName(month: number): string {
    try {
        const language: string = getLanguage();
        const monthName: string = months[language][month - 1];
        return monthName;
    } catch (error) {
        throw error;
    }
}

export { getMonthName }
