// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { fetchMovies } from "../store/actions/actionMovie";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default function Home() {
//     const [searchQuery, setSearchQuery] = useState("")
//     const [displayedMovies, setDisplayedMovies] = useState([]);
//     const dispatch = useDispatch();

//     const moviesData = useSelector((state) => state.movies.movies)
//     const loading = useSelector((state) => state.movies.loading)
//     const error = useSelector((state) => state.movies.error)

//     console.log(moviesData?.data?.results)
//     useEffect(() => {
//         dispatch(fetchMovies(searchQuery))
//         if (moviesData?.data?.results) {
//             // Set initial display to the first 10 items
//             setDisplayedMovies(moviesData.data.results.slice(0, 10));
//           }
//     },[searchQuery])

//     const fetchMoreData = () => {
//         setTimeout(() => {
//             if (moviesData?.data?.results) {
//                 const currentLength = displayedMovies.length;
//                 const newData = moviesData.data.results.slice(
//                   currentLength,
//                   currentLength + 10
//                 );
//                 setDisplayedMovies([...displayedMovies, ...newData]);
//               }
//         },1000)
//     }
    
//     return (
//         <>
//         <InfiniteScroll
//         dataLength={displayedMovies.length}
//         next={fetchMoreData}
//         hasMore={true}
//         endMessage={
//             <p style={{ textAlign: 'center' }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//       >
//         {displayedMovies.map((movie, index) => (
//           <div key={index}>
//             <div style={{border: 'solid 1px', padding: '10px'}}>
//                 <p>{index + 1}. {movie.title}</p>
//             </div>
            
//           </div>
//         ))}
//       </InfiniteScroll>
//         </>
//     )
// }