import Image from "next/image";
import { Movie } from "@/app/lib/definitions";
import Link from "next/link";

export default function MovieCard(movie: Movie, index: number) {
  return (
    <div key={index} className={'bg-gray-700 h-80 rounded mx-4'}>
      <Link className='flex flex-col items-center text-center' href={`/movies/${movie.id}`}>
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.overview} width={180} height={300} />
        {movie.title}
      </Link>
    </div>
  )
}