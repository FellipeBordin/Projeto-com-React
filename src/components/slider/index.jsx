

import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import Card from "../Card";

function Slider({ info, title }) {

    return (
        <Container>
            <h2>{title}</h2>  
            <Swiper grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper">

                {info.map((item) => (

                    <SwiperSlide key={item.id} style={{width:"300px"}} >
                        <Card item={item} />
                    </SwiperSlide>

                ))}


            </Swiper>
        </Container>
    )
}



Slider.propTypes = {
    info: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string,
            original_title: PropTypes.string,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,

}

export default Slider;