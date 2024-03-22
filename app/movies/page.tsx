
import { loadMovies } from '@/app/lib/load-movies';
import MovieCard from '@/app/ui/card/movie-card';
import { Movie } from '@/app/lib/definitions';

export default async function Home() {
    const newMovies = await loadMovies();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                </div>
            </div>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                {newMovies?.results.map((movie: Movie, index: number) => (
                    <div key={index} className={'py-3'}>
                        <MovieCard {...movie} />
                    </div>
                ))}
            </div>
        </main>
    )
}
