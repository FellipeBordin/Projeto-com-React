import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail, Background, Cover, Info, ContainerMovies } from "./styles";
import getImages from "../../utils/getImages"
import Slider from "../../components/Slider";

import {
  getMovieCredits,
  getMovieSimilar,
  getMovieById,
  getMovieVideos,
} from "../services/getData";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";


function DetailPage() {
  const { id } = useParams(); // <-- Recupera o ID da URL
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieSimilar, setMovieSimilar] = useState(null);
  const [movies, setMovies] = useState(null);
  const [movieVideos, setMovieVideos] = useState(null);

  useEffect(() => {
    async function getAllData() {
      try {
        const [credits, similar, movieData, videos] = await Promise.all([
          getMovieCredits(id),
          getMovieSimilar(id),
          getMovieById(id),
          getMovieVideos(id),
        ]);

        setMovieCredits(credits);
        setMovieSimilar(similar);
        setMovies(movieData);
        setMovieVideos(videos);
      } catch (error) {
        console.error("Erro ao buscar dados do filme:", error);
      }
    }

    getAllData();
  }, [id]);
  
  return (
    <>
      {movies &&
        <>
          <Background $image={getImages(movies.backdrop_path)} />
          <Detail>
            <Cover>
              <img src={getImages(movies.poster_path)} />
            </Cover>
            <Info>
              <h2>{movies.title}</h2>
              {movies && <SpanGenres genres={movies.genres} />}
              <p>{movies.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Detail>
          <ContainerMovies>
            {movieVideos && movieVideos.map(videos =>
              <div key={videos.id} >
                <h4>{videos.name}</h4>
                <iframe
                  src={`https://www.youtube.com/embed/${videos.key}`}
                  title="Youtube Videos Player"
                  height="500px"
                  width="100%"
                ></iframe>

              </div>

            )}
          </ContainerMovies>
           {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
        </>
      }
    </>
  );



}
export default DetailPage