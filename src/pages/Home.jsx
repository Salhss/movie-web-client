import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/actionMovie";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../components/Navbar";
import HeaderComponent from "../components/Header";
import "../assets/css/Home.css";
import Content from "../components/Content";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const moviesData = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

//   console.log(searchQuery)
  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, []);

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <HeaderComponent slides={moviesData?.data} />
      <Content title={"Movies For You"} moviesData={moviesData} searchQuery={searchQuery} />
      {/* {searchQuery === "" || !searchQuery ? (
        <>
        </>
      ) : (
        <Content title={"All Movies"} moviesData={moviesData} searchQuery={searchQuery}/>
      )} */}
    </>
  );
}
