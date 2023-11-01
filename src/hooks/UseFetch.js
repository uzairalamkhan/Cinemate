import React, { useState, useEffect } from 'react'

function UseFetch(api, queryTerm="") {
    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${api}?api_key=d5b02461d6f1c66d79521662316f68ea&query=${queryTerm}`
     
    useEffect(()=>{
        async function fetchMovies(){
          const response=await fetch(url);
          const data=await  response.json();
          setData(data.results);
        }
        fetchMovies();
      },[url])

  return (
{data}
  )
}

export default UseFetch
