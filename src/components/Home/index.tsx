import Image from 'next/image';

const Home = () => {
    return (
        <section className="grid grid-cols-2 gap-6 place-items-center w-full h-full">
            <Image src="/image.png" alt="Logo" width={100} height={100} loading='eager' quality={100} />
            <div>
                <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            </div>
        </section>
    );
};

export default Home;