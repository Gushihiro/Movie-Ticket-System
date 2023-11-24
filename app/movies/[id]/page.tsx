import { getMovieById } from "@/app/lib/load-movies";
import Image from "next/image";
import { Movie } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const selectedMovie: Movie = await getMovieById(id);
  console.log(selectedMovie);
  return (
    <main>
      <Image src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.overview} width={180} height={300} />
        {selectedMovie.title}
    </main>
  );
}