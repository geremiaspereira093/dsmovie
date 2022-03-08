import {ReactComponent as ArrowPrev} from 'assets/img/Anterior.svg'
import './Style.css'
function Pagination() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <ArrowPrev />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <ArrowPrev className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}
export default Pagination;