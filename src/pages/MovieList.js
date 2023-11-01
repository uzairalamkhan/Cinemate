// import styles from "../index.css";
// import {Link, useFetcher} from "react-router-dom"
import {Card} from "../components/Card"
import { useEffect} from "react";
import useFetch from "../hooks/UseFetch";

export const MovieList = ({api,title}) => {

  const {data :movies}=useFetch(api);

  useEffect(()=>{
    document.title=`${title}/ Cinemate`;
  });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {
            movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>
            ))
          }
           

        </div>
      </section>
    </main>
  );
};

// export default MovieList
