'use client'

import HeaderBtn from '@/components/ui/header-button'

const Header = () => {
    return (
        <header className="relative z-10 flex items-center max-h-[10vh] w-full flex-1 justify-center p-4 pt-12 mb-7">
            <nav className="grid grid-cols-3 justify-items-center gap-16 md:gap-24 lg:gap-36 text-md sm:text-xl md:text-2xl font-extralight">
                <HeaderBtn key={1} href="/">home</HeaderBtn>
                <HeaderBtn key={2} href="/projetos">projetos</HeaderBtn>
                <HeaderBtn key={3} href="/contato">contato</HeaderBtn>
            </nav>
        </header>
    )
}

export default Header
