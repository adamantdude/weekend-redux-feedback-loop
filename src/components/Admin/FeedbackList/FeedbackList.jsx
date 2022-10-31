function FeedbackList({ survey, clickConfirm }) {
    return (
        <tr>
            <td>{survey.feeling}</td>
            <td>{survey.understanding}</td>
            <td>{survey.support}</td>
            <td>{survey.comments}</td>
            <td>{survey.flagged}</td>
            <td>{survey.date}</td>
            <td><button onClick={() => clickConfirm(survey.id)}>DELETE</button></td>
        </tr>
    )
}

export default FeedbackList;