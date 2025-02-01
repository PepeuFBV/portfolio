import { twMerge } from 'tailwind-merge';

interface HeaderBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    ref?: React.Ref<HTMLAnchorElement>;
}

const HeaderBtn: React.FC<HeaderBtnProps> = ({ children, className, ref, ...props }) => {
    return (
        <a
            className={twMerge("text-md sm:text-xl md:text-2xl font-extralight p-1 px-2 dark:hover:bg-slate-900 rounded-md", className)}
            ref={ref}
            {...props}
        >
            {children}
        </a>
    );
};

export default HeaderBtn;