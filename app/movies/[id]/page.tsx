import { getMovieById } from "@/app/lib/load-movies";
import Image from "next/image";
import { Movie } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const selectedMovie: Movie = await getMovieById(id);
  console.log(selectedMovie, "Selected Movie");
  console.log(selectedMovie.genres, "Genres");
  return (
    <main className={'container'}>
        <div className={'flex flex-row justify-center'}>
            <div className={'flex-col'}>
                <Image className={'px-4'} src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.overview} width={360} height={600} />
            </div>
            <div className={'flex flex-col h-full justify-between'}>
                <div className={'text-8xl text-center'}>
                    {selectedMovie.title}
                </div>
                {selectedMovie.tagline ?
                    <div className={'text-end text-xs py-4'}>
                        {selectedMovie.tagline}
                    </div> :
                    ''
                }
                <div className={'text-end text-xs py-2'}>
                    Runtime: {selectedMovie.runtime} min
                </div>
                <div className={'text-end text-xs py-2'}>
                    <div className={'flex flex-col'}>
                        {selectedMovie.genres.map((genre, index) => (
                            <span key={index}> {genre.name} </span>
                        ))}
                    </div>
                </div>
                <div className={'max-w-3xl py-10'}>
                    {selectedMovie.overview}
                </div>
                <div className={'max-w-3xl py-10 flex flex-row-reverse'}>
                    <span
                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded
                                   dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        07:30pm
                    </span>
                    <span
                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded
                                   dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        04:30pm
                    </span>
                    <span
                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded
                                   dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        02:00pm
                    </span>
                </div>
            </div>
        </div>
    </main>
  );
}