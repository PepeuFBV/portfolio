import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center max-h-[10vh] justify-center w-full p-4 pt-6">
            <nav className="flex space-x-36 text-2xl font-extralight">
                <a href="#Home">home</a>
                <a href="#Projetos">projetos</a>
                <a href="#Contato">contato</a>
            </nav>
        </header>
    );
};

export default Header;