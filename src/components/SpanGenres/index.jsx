import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";


function SpanGenres({ genres }) {

  return (
    <Container>
      {genres &&
        genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
    </Container>
  );
}

SpanGenres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default SpanGenres;
