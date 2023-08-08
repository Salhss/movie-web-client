export default function HeaderComponent(props) {
  const { slides } = props;
  const hotMovies = slides?.slice(10, 20);
  const dataHotMovies = hotMovies?.map((el) => {
    return (
      <>
        <div className="hot-movies-image">
          <img src={el.imageurl} alt="" />
          <div className="overlay-gradient"></div>
          <div className="overlay-text">
            <p>{el.title}</p>
          </div>
        </div>
      </>
    );
  });

  const newMovies = slides?.slice(20, 30);
  const dataNewMovies = newMovies?.map((el) => {
    return (
      <>
        <div className="new-movie-image">
          <img src={el.imageurl} alt="" />
          <div className="overlay-gradient"></div>
          <div className="overlay-text">
            <p>{el.title}</p>
          </div>
        </div>
      </>
    );
  });

  const topAiring = slides?.slice(30, 35)
  const dataTopAiring = topAiring?.map((el, i) => {
    return (
        <div className="top-airing-card">
            <p className="numbers">{ i + 1 }</p> 
            <img src={el.imageurl} alt={el.title} />   
            <div className="info-container">
                <h4>{el.title}</h4>
                <p>Genre: {el.genre}</p>
                <p>Rating: {el.imdbrating}</p>
                <p>Year: {el.released}</p>
            </div>
        </div>
    )
  })

  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <div className="hot-movies">
            <div className="title-header">
              <h1>Hot Movies</h1>
            </div>
            <div className="image-container">{dataHotMovies}</div>
          </div>
          <div className="hot-movies">
            <div className="title-header">
              <h1>New Movies</h1>
            </div>
            <div className="image-container">{dataNewMovies}</div>
          </div>
        </div>
        <div className="header-right">
            <div className="top-airing">
                <div className="title-header">
                    <h1>Top Airing Movie</h1>
                </div>
                {dataTopAiring}
            </div>
        </div>
      </div>
    </>
  );
}
