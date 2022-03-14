import { ReactComponent as StarFull } from "assets/img/StarFull.svg";
import { ReactComponent  as StarHalf } from "assets/img/StarHalf.svg";
import { ReactComponent  as StarEmpty } from "assets/img/StarEmpty.svg";
import './Style.css'

type Props = {
    score:number;

}

type StarProps = {
    fill: number;
}
// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }
function Stars({fill}: StarProps){
    if( fill === 0){
       return <StarEmpty/>  
    }
    else if(fill === 1){
        return <StarFull/>
    }
    else{
        return <StarHalf/>
    }
}
function MovieStars( {score}: Props) {
    const fills = getFills(score)
    return(
        <div className="dsmovie-stars-container">
            <Stars fill={fills[0]} />
            <Stars fill={fills[1]} />
            <Stars fill={fills[2]} />
            <Stars fill={fills[3]} />
            <Stars fill={fills[4]} />
        </div>
    ); 
}
export default MovieStars;