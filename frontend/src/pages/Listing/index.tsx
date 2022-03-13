import Pagination from "componentes/Pagination";
import MovieCard from "componentes/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/request";

function Listing() {
    // forma errada
    axios.get(`${BASE_URL}/movies?size =12& page =0`)
    .then( resposta =>{
        console.log(resposta.data)
    })

    return (
        <>
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