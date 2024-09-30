import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getYear } from "date-fns";
import star from "../..//assets/star.png";
import { Box, Tooltip } from "@mui/material";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "../Context/ThemeContext";
import "./singleMovie.css";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});

  const { bodyTheme } = useTheme();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    fetchSingleMovie();
  }, [movieId]);

  const fetchSingleMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ed025f978e8cd3a8aa34b886a22fcec3`
    );
    const data = await response.json();
    setSingleMovie(data);
  };

  const customTheme = createTheme({
    palette: {
      themeComponent: {
        dark: {
          main: "#262626",
          contrastText: "white",
        },
        light: {
          main: "#ffe400",
          contrastText: "black",
        },
      },
      companyComponent: {
        dark: {
          main: "#121212",
          contrastText: "#fafafa",
        },
        light: {
          main: "#fafafa",
          contrastText: "black",
        },
      },
    },
  });

  const MyThemeComponent = styled("div")(({ theme }) =>
    theme.unstable_sx({
      color:
        bodyTheme === "dark"
          ? "themeComponent.dark.contrastText"
          : "themeComponent.light.contrastText",
      backgroundColor:
        bodyTheme === "dark"
          ? "themeComponent.dark.main"
          : "themeComponent.light.main",
      padding: 1,
      borderRadius: 2,
      borderColor: "#fbd200",
    })
  );
  const MyCompanyComponent = styled("div")(({ theme }) =>
    theme.unstable_sx({
      color:
        bodyTheme === "dark"
          ? "companyComponent.dark.contrastText"
          : "companyComponent.light.contrastText",
      backgroundColor:
        bodyTheme === "dark"
          ? "companyComponent.dark.main"
          : "companyComponent.light.main",
      padding: 1,
      borderRadius: 2,
    })
  );

  return (
    <div className="single-movie-container">
      <Tooltip title="Back Page" arrow>
        <KeyboardDoubleArrowLeft
          fontSize="large"
          style={{
            color: bodyTheme === "dark" ? "#262626" : "black",
            marginRight: "30px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
      </Tooltip>
      <div className="single-movie-card">
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`}
            alt="movie_poster"
            className="single-movie-poster"
          />
        </div>
        <div className="single-movie-info">
          <div
            className={
              bodyTheme === "dark"
                ? "single-movie-title"
                : "single-movie-light-title"
            }
          >
            {singleMovie?.title}
          </div>
          <div
            className={
              bodyTheme === "dark"
                ? "single-movie-tagline"
                : "single-movie-light-tagline"
            }
          >
            {singleMovie?.tagline ? singleMovie?.tagline : ""} (
            {getYear(singleMovie?.release_date)})
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                marginBottom: "3%",
              }}
            >
              <ThemeProvider theme={customTheme}>
                {singleMovie?.genres?.map((genre, index) => (
                  <MyThemeComponent key={index}>{genre.name} </MyThemeComponent>
                ))}
              </ThemeProvider>
            </Box>
          </div>
          <div className="single-movie-overview">{singleMovie?.overview}</div>
          <div className="single-movie-card-stars">
            <div className="div-star-emoji">
              <img src={star} alt="rating icon" className="star-emoji" />
            </div>
            <div className="div-vote-average">{singleMovie?.vote_average}</div>
          </div>
          <div className="single-movie-card-companies">
            <h2 className="production-companies-title">Production Companies</h2>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                marginBottom: "3%",
              }}
            >
              <ThemeProvider theme={customTheme}>
                {singleMovie?.production_companies?.map((company, index) => (
                  <MyCompanyComponent key={index}>
                    <Tooltip title={company.name} arrow>
                      {company.logo_path ? (
                        <img
                          key={company.id}
                          src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                          alt={`${company.name} logo`}
                          style={{
                            width: "120px",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <p key={company.id}>{company.name}</p>
                      )}
                    </Tooltip>
                  </MyCompanyComponent>
                ))}
              </ThemeProvider>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
