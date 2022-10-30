import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');


    const nextPage = () => {
        dispatch({type:'commentAdd', data:comments})
        history.push('/review');
    }

    return (
        <div id="commentspage">
            <input 
                type="text"
                onChange={(e) => setComments(e.target.value)}
            />
            <button onClick={nextPage}>NEXT</button>
        </div>
    )
}

export default Comments;