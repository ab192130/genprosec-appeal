import Head from "next/head";
import Link from "next/link";

const DefaultLayout = (props) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Onlayn müraciətlər</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header>
                <Link href="/" className="">Əsas səhifə</Link>
                <Link href="/submit">Yeni müraciət</Link>
            </header>

            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                {props.children}
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Made by{' '}
                    <img src="/logo.svg" alt="Made by Burhan Aghazada" className="h-12 ml-2"/>
                </a>
            </footer>
        </div>
    );
};

export default DefaultLayout;