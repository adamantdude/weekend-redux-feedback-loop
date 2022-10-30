import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [rating, setRating] = useState(0);

    const nextPage = () => {
        if(rating === 0) {
            alert('A rating must be provided from 1-5');
            return;
        }
        dispatch({type:'understandRating', data:rating});
        history.push('/support');
    }

    return (
        <div id="understandingpage">
            <h3>How well did you understand the content?</h3>
            <input 
                type="number" 
                onChange={(e) => {setRating(e.target.value)}} 
                min={1} max={5} 
            />
            <button onClick={nextPage}>NEXT</button>
        </div>
    )
}

export default Understanding;