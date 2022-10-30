import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Conclusion() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type:'reset'});
    }, [])

    return (
        <div id="conclusion">
            <h1>Thank you for submitting feedback!</h1>
            <p>Would you like to submit a new survey?</p>
            <button onClick={() => history.push('/')}>Cancel</button>
            <button onClick={() => history.push('/feeling')}>New Survey</button>
        </div>
    )
}

export default Conclusion;