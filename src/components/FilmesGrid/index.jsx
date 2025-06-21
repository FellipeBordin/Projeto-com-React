
import React from "react";
import { useNavigate } from "react-router-dom";
import getImages from "../../utils/getImages"
import PropTypes from "prop-types";
import { GridContainer,GridItem } from "./styles";


function FilmesGrid({ filmes }) {
  const navigate = useNavigate();

  return ( 

    <GridContainer>
       {filmes.map((filme) => (
        <GridItem
          key={filme.id}
          onClick={() => navigate(`/detalhe/${filme.id}`)}>
          <img src={getImages(filme.poster_path)} alt={filme.title} />
          <h3>{filme.title}</h3>
        </GridItem>
      ))}
    
    </GridContainer>
  );
}

FilmesGrid.propTypes = {
  filmes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default FilmesGrid;
