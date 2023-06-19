import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ authedUser, questions, users }) => {

    const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id) && !question.optionTwo.votes.includes(authedUser.id));
    const answered = (question) => (question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id));

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row-12 text-center" data-testid="heading">Dashboard<br></br><br></br></div>
                    <div className="row" style={{ borderBottom: 'solid', textAlign: 'center', marginBottom: '20px' }}>
                        <h2>New Questions</h2>
                    </div>
                    <div className="row row-cols-3">
                        {questions.filter(unanswered).map((question) => (
                            <div className="col" style={{ paddingBottom: 'calc(var(--bs-gutter-x) * .5)', paddingTop: 'calc(var(--bs-gutter-x) * .5)' }} key={question.id}>
                                <div className="card" >
                                    <Card question={question} author={users[question.author]} hasVoted={false} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row"><br></br><br></br></div>
                    <div className="row" style={{ borderBottom: 'solid', textAlign: 'center', marginBottom: '20px' }}>
                        <h2>Answered Questions</h2>
                    </div>
                    <div className="row row-cols-3">
                        {questions.filter(answered).map((question) => (
                            <div className="col" style={{ paddingBottom: 'calc(var(--bs-gutter-x) * .5)', paddingTop: 'calc(var(--bs-gutter-x) * .5)' }} key={question.id}>
                                <div className="card" >
                                    <Card question={question} author={users[question.author]} hasVoted={true}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
    users,
});

export default connect(mapStateToProps)(Dashboard);
