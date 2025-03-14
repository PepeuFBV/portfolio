import { ReactNode } from 'react'

type ProjectsT = {
    title: string[]
    projects: ProjectData[]
}

type ProjectData = { // array for multiple languages
    id: number;
    name: string;
    description: string[];
    madeAt?: MonthYear;
    picture?: string;
    extraInfo?: ReactNode[];
    link: string;
    tags?: string[][];
    languagesAndFrameworks?: string[]; // column is compared with tag column and tags are removed in DataTable
    highlight?: boolean;
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

type IndexOption = {
    id: number;
    name: string;
    link: string;
}

type NotFoundContent = {
    title: string[];
    description: string[];
    buttonText: string[];
}

export type { ProjectsT, ProjectData, Job, DateRange, MonthYear, IndexOption, NotFoundContent }
