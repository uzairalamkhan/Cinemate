import {Routes,Route} from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound} from "../pages"



const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800">

      <Routes>
        <Route path="/" element={<MovieList api="movie/now_playing" title="Home"/>} />
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/popular" element={<MovieList api="movie/popular" title="popular"/>}/>
        <Route path="movies/top" element={<MovieList api="movie/top_rated" title="Top Rated"/>}/>
        <Route path="movies/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming"/>}/>
        <Route path="Search" element={<Search api="search/movie" title="Search"/>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>

    </div>
  )
}

export default Allroutes
