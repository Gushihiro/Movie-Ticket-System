const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjM0OGI0ZjYyZDFmZWQ3MmFlYjZjZmI3MWM1NWQ2YyIsInN1YiI6IjY0NmE5NTUzMDA2YjAxMDE4OTU5MWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I-53VO7AWLy9UYHHrWRTMpLkZa-U-HheGlQ0kRnyaGk'
  },
  next: {
    revalidate: 1
  }
};

export async function loadMovies() {
  const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
  if (!res.ok) {
    throw new Error('Failed to fetch recent movies.')
  }
  
  return res.json();
}

export async function getMovieById(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
  if (!res.ok) {
    throw new Error('Failed to fetch movie with provided id.')
  }

  return res.json();
}