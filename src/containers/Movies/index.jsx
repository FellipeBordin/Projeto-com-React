import React, { useState, useEffect } from "react";
import { getPopularMovies, getTopMovies } from "../services/getData";
import FilmesGrid from "../../components/FilmesGrid";
import {PageContainer,Section,Title} from "./styles"
 import  { FaFilm, FaStar } from "react-icons/fa";

function Filmes() {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [top, popular] = await Promise.all([
        getTopMovies(),
        getPopularMovies(),
      ]);
      setTopMovies(top);
      setPopularMovies(popular);
    }

    fetchData();
  }, []);

  return (
<PageContainer>
      <Section>
        <Title><FaStar /> Top Filmes</Title>
       <FilmesGrid filmes={topMovies} />
      </Section>

      <Section>
        <Title><FaFilm /> Filmes Populares</Title>
       <FilmesGrid filmes={popularMovies} />
      </Section>
    </PageContainer>
  );
}

export default Filmes;
