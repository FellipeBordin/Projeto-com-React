import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./styles";
import getImages from "../../utils/getImages";

function Credits({ credits }) {
  
if (!credits || credits.length === 0) return null;

  return ( 
    <>
    <Title>Créditos</Title>
    {credits && (
      <Container>
        {credits.slice(0,5).map((artist) => (
          <div key={artist.id}>
            <img src={getImages(artist.profile_path)} />
            <p> {artist.original_name} </p>
          </div>
        ) )}
      </Container>
    )}
    </>
  )
}

Credits.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      original_name: PropTypes.string,
    })
  ),
};

export default Credits;

