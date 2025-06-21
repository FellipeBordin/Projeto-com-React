import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



import React from "react"
import { ContainerButtons } from "./styles"
import { } from "react-router-dom"
import { Background, Info } from "./styles"
import { Poster } from "./styles"
import { Container } from "./styles"
import Button from "../../components/Button"
import Slider from "../../components/slider"
import getImages from "../../utils/getImages"
import Modal from "../../components/Modal"
import { getMovie, getTopMovies, getPopularSeries, getTopPeople, getTopSeries } from "../services/getData"



function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovies] = useState(null)
    const [topMovies, setTopMovies] = useState([])
    const [topSeries, setTopSeries] = useState([])
    const [popularSeries, setPopularSeries] = useState([])
    const [topPeople, setTopPeople] = useState([])
    const navigate = useNavigate()
    
    
    


useEffect(() => {
  async function getAllData() {
    try {
     

      const [
        movie,
        topMovies,
        topSeries,
        popularSeries,
        topPeople,
      ] = await Promise.all([
        getMovie(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ]);

      setMovies(movie);
      setTopMovies(topMovies);
      setTopSeries(topSeries);
      setPopularSeries(popularSeries);
      setTopPeople(topPeople);

    
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  getAllData();
}, []);







    return (
        <div>
            {movie && (
                <Background
                    $img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />)}
                    <Container>
                        <Info >
                            <h1> {movie.title} </h1>
                            <p>{movie.overview} </p>
                            <ContainerButtons>
                                <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>
                                    Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}
                                    red={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img
                                alt="capa-do-filme"
                                src={getImages(movie.poster_path)}
                            />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Popular'} />}
            {setTopPeople && <Slider info={topPeople} title={'Artista'} />}
        </div>
    )


}

export default Home