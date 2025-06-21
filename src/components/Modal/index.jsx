import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Background} from "./estyles";
import Button from "../Button";
import { getMovieVideos } from "../../containers/services/getData";



function Modal({ movieId, setShowModal}) {
  const [movie, setMovie] = useState(null);

useEffect(() => {
    async function fetchMovie() {
      if (!movieId) return;
      const movieData = await getMovieVideos(movieId);
      setMovie(movieData);
    }

    fetchMovie();
  }, []);


  return (
    <Background onClick={()=> setShowModal(false)}>
      {movie && (
      <Container $hasMovie={!!movieId} onClick={(e) => e.stopPropagation()}>
        <Button className="close-button" onClick={() => setShowModal(false) }>
           X </Button>
        <iframe
          src={`https://www.youtube.com/embed/${movie[0].key}`}
          title="Youtube Videos Player"
          height="500px"
          width="100%"
         
          >
      
        </iframe>

      </Container>
      )}
    </Background>
  );
}

Modal.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setShowModal: PropTypes.func.isRequired
};

export default Modal;
