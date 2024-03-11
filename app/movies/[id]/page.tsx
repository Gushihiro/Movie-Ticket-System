import { getMovieById } from "@/app/lib/load-movies";
import Image from "next/image";
import { Movie } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const selectedMovie: Movie = await getMovieById(id);
  console.log(selectedMovie, "Selected Movie");
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
                <div className={'text-end text-xs py-6'}>
                    {selectedMovie.tagline}
                </div>
                <div className={'max-w-3xl py-10'}>
                    {selectedMovie.overview}
                </div>
            </div>
        </div>
    </main>
  );
}