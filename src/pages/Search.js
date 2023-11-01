import React from 'react'
import {Card} from "../components/Card"
import { useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { useSearchParams } from 'react-router-dom';


export const Search = ({api}) => {
  const [searchParams]=useSearchParams();
  const queryTerm = searchParams.get("q")

  const {data :movies}=useFetch(api,queryTerm);

  useEffect(()=>{
    document.title=`Search result for ${queryTerm}/ Cinemate`;
  });

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>
          {movies.length===0? `NO Result found for ${queryTerm}` : `Result for ${queryTerm}`}
        </p>
      </section>
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
  )
}

// export default Search
