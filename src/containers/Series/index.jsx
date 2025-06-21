import React, { useEffect, useState } from "react";
import { getTopSeries } from "../services/getData";
import { FaTv } from "react-icons/fa";
import {PageContainer,SectionTitle,Grid,Card} from "./styles";
import { useNavigate } from "react-router-dom";
import getImages from "../../utils/getImages";



function Series() {
    const [series, setSeries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await getTopSeries()
            setSeries(response);
        }

        fetchData()
    },[])
    return (
        <>
        <PageContainer>
      <SectionTitle>
        <FaTv />
        Séries Populares
      </SectionTitle>
      <Grid>
        {series.map((serie) => (
          <Card key={serie.id} onClick={() => navigate(`/detalhe/${serie.id}`)}>
            <img src={getImages(serie.poster_path)} alt={serie.name} />
            <p>{serie.name}</p>
          </Card>
        ))}
      </Grid>
    </PageContainer>
       </>
    )
}

export default Series;
