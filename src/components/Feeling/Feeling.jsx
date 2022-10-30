import './Feeling.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const nextPage = () => {
        if(rating === 0) {
            alert('A rating must be provided from 1-5');
            return;
        }
        dispatch({type:'feelRating', data:rating});
        history.push('/understanding');
    }

    return (
        <div id="feelingpage">
            <h3>How are you feeling today?</h3>
            <input 
                type="number" 
                onChange={(e) => {setRating(e.target.value)}} 
                min={1} max={5} 
            />
            <button onClick={nextPage}>NEXT</button>
        </div>
    )
}

export default Feeling;