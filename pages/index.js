import DefaultLayout from "../layouts/default";
import Button from "../app/main/ui/button";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 overflow-hidden relative">
            <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-5xl font-extrabold text-black dark:text-white sm:text-5xl">
                    <span className="block">
                        Sözünüz var ?
                    </span>
                    <span className="block text-blue-600">
                        Hər zaman buradayıq.
                    </span>
                </h2>
                <p className="text-xl mt-4 text-gray-400 leading-relaxed">
                    Vətəndaşların problemli məsələləri üzrə həlləri onlayn xidmət olaraq önünüzə səririk.
                    Ofisimizə gəlmədən bütün çətinliklərinizi həll edin. Sadəcə tək klik uzaqda.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md">
                        <Button>
                            İNDİ MÜRACİƏT ET
                        </Button>
                    </div>
                </div>
            </div>
            <img src="/logo_lg.jpg"
                 className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"/>
        </div>
    )
}

Home.Layout = DefaultLayout;
