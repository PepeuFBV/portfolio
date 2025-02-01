'use client';

import HeaderBtn from '@/components/ui/header-button';

const Header = () => {
    return (
        <header className="flex items-center max-h-[10vh] justify-center w-full p-4 pt-6 mb-7">
            <nav className="grid grid-cols-3 justify-items-center gap-16 md:gap-24 lg:gap-36 text-md sm:text-xl md:text-2xl font-extralight">
                <HeaderBtn href="/">home</HeaderBtn>
                <HeaderBtn href="/projetos">projetos</HeaderBtn>
                <HeaderBtn href="/contato">contato</HeaderBtn>
            </nav>
        </header>
    );
};

export default Header;