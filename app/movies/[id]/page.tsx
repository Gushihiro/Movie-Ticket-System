import { getMovieById } from "@/app/lib/load-movies";
import Image from "next/image";
import { Movie } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const selectedMovie: Movie = await getMovieById(id);
  console.log(selectedMovie, "Selected Movie");
  return (
    <main className={'flex flex-row items-center text-center'}>
      <Image className={'px-4'} src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.overview} width={360} height={600} />
      <div>
        <div className={'text-5xl py-4'}>
          {selectedMovie.title}
        </div>
        <div className={'max-w-3xl'}>
          {selectedMovie.overview}
        </div>
      </div>
    </main>
  );
}