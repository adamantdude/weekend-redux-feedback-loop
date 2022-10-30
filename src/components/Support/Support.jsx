import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [rating, setRating] = useState(0);

    const nextPage = () => {
        if(rating === 0) {
            alert('A rating must be provided from 1-5');
            return;
        }
        dispatch({type:'supportRating', data:rating});
        history.push('/comments');
    }

    return (
        <div id="supportpage">
            <h3>How well are you feeling supported?</h3>
            <input 
                type="number" 
                onChange={(e) => {setRating(e.target.value)}} 
                min={1} max={5} 
            />
            <button onClick={nextPage}>NEXT</button>
        </div>
    )
}

export default Support;