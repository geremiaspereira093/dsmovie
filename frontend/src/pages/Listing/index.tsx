import Pagination from "componentes/Pagination";
import MovieCard from "componentes/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { useEffect, useState } from "react";
import { MoviePage } from "Types/movies";

function Listing() {
    const[pageNumber, setPageNumber] = useState(0);
    
    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size =12&page=1`)
        .then( resposta =>{
            const data = resposta.data as MoviePage
            console.log(data)
            setPageNumber(data.number)
        });
    },[])

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                  
                </div>
            </div>
        </>
    );
}
export default Listing