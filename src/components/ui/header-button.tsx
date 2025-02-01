import { twMerge } from 'tailwind-merge';

interface HeaderBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    key: number;
    ref?: React.Ref<HTMLAnchorElement>;
}

const HeaderBtn: React.FC<HeaderBtnProps> = ({ children, className, key, ref, ...props }) => {
    return (
        <a
            className={twMerge("text-md sm:text-xl md:text-2xl font-extralight p-1 px-2 transition duration-200 dark:hover:bg-slate-700 rounded-md", className)}
            key={key}
            ref={ref}
            {...props}
        >
            {children}
        </a>
    );
};

export default HeaderBtn;