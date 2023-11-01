import { useEffect } from "react"
import PageNotFoundImage from "../assets/images/pagenotfound.jpg"
import { Link } from "react-router-dom"
export const PageNotFound = () => {

  useEffect(()=>{
    document.titl=`Page Not Found / Cinemate`;
  });

  return (
    <main >
        <section className="flec flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, oops!</p>
            <div className="max-w-lg">
            <img src={PageNotFoundImage} alt="404 Pge Not Found"/>

            </div>
            <Link to="/">
            <button className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to to-blue-700 my-4 rounded-lg font-medium text-white"> Back To Cinemate</button>
            </Link>
          </div>
        </section>
    </main>
  )
}

// export default PageNotFound
