import { useHistory } from 'react-router-dom';
import './Home.css';


function Home() {

    const history = useHistory();

    const start = () => {
        history.push('/feeling');
    }

    return(
        <div id="homepage">
            <h2>Please submit your feedback!</h2>
            <button onClick={start}>START</button>
        </div>
    )
}

export default Home;