import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import getImages from "../../utils/getImages";

function Card({ item }) {
    return (
        <Container>
            < img
                src={getImages(item.poster_path || item.profile_path || '' )}
                alt={item.original_title }
            />

            <h3>{item.title || item.name }</h3>

        </Container>
    );
}


Card.propTypes = {
    item: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        title: PropTypes.string,
        profile_path: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
}

export default Card;