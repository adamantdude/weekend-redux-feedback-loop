import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
    const history = useHistory();
    const review = useSelector(store => store.feedback);

    const submitHandle = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: review
        })
            .then(res => {
                console.log(res);
                history.push('/conclusion');
            })
            .catch(err => console.log(err))
    }

    return (
        <div id="reviewpage">
            <h2>Feedback Overview</h2>
            <div id="feelingReview">
                <p>Feeling: {review.feeling}</p>
            </div>
            <div id="understandingReview">
                <p>Understanding: {review.understanding}</p>
            </div>
            <div id="supportReview">
                <p>Support: {review.support}</p>
            </div>
            <div id="commentReview">
                <p>Comments: {review.comments}</p>
            </div>
            <button onClick={submitHandle}>SUBMIT</button>
        </div>
    )
}

export default Review;