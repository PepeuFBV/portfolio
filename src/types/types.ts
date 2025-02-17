type Project = { // array for multiple languages
    name: string[];
    description: string[];
    link: string;
}

type MonthYear = {
    month: number | null;
    year: number;
}

type DateRange = { // for date range, if end is null, it means it's still ongoing
    start: MonthYear | null;
    end: MonthYear | null;
    singleDate?: boolean; // if true, it's a single date, if false, it's a date range
}

type Job = { // array for multiple languages
    id: number;
    title: string[];
    company: string[];
    companyLink: string | null;
    projectLink: string | null;
    description: string[];
    date: DateRange | null;
    tags?: string[][];
}

export type { Project, Job, DateRange }
