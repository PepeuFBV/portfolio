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
}

type Date = { // for single date
    date: MonthYear | null;
}

type Job = { // array for multiple languages
    title: string[];
    company: string[];
    companyLink: string | null;
    description: string[];
    date: DateRange | Date | null;
}

export type { Project, Job }
