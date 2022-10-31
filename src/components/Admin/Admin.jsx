import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import FeedbackList from "./FeedbackList/FeedbackList";

function Admin() {

    const [feedbackList, setList] = useState([]);

    useEffect(() => {
        getFeedbackList();
    }, [])

    const getFeedbackList = () => {
        axios({ method: 'GET', url: '/feedback' })
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    }

    const clickConfirm = (id) => {
        if (confirm('Are you sure you want to delete this entry?')) {
            confirmedDelete(id);
        }
    }

    const confirmedDelete = (id) => {
        axios({ method: 'DELETE', url: `/feedback/${id}` })
            .then(res => getFeedbackList())
            .catch(err => console.log(err))
    }

    return (
        <div id="adminpage">
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flagged</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList.map(survey =>
                        <FeedbackList key={survey.id} survey={survey} clickConfirm={clickConfirm}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;