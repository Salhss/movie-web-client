import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Content(props) {
  const { title, moviesData, searchQuery } = props;
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    setDisplayedMovies(moviesData?.data?.slice(0, 17));
  }, [moviesData]);

  const fetchMoreData = () => {
    setTimeout(() => {
      if (moviesData?.data) {
        const currentLength = displayedMovies?.length;
        const newData = moviesData?.data?.slice(
          currentLength,
          currentLength + 17
        );
        setDisplayedMovies([...displayedMovies, ...newData]);
      }
    }, 1000);
  };

  const dataMap = displayedMovies?.length > 0
  ? displayedMovies?.map((movie, index) => {
      return (
        <div className="hot-movies-image" key={index}>
          <img src={movie.imageurl} alt={movie.title} />
          <div className="overlay-gradient"></div>
          <div className="overlay-text">
            <p>{movie.title}</p>
          </div>
        </div>
      );
    })
  : null;

  return (
    <>
      <div className="main-content">
        <div className="title-header">
          <h1>{title}</h1>
        </div>
        <InfiniteScroll
          dataLength={displayedMovies?.length}
          next={fetchMoreData}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="content-container">{dataMap}</div>
        </InfiniteScroll>
      </div>
    </>
  );
}
