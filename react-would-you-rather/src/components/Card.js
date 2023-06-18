import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question, author }) => {
    return (
        <Link to={'questions/' + question.id}>
            <div className="card" style={{textAlign:'center',display:'block', marginLeft:'auto', marginRight:'auto'}}>
                <img src={author?.avatarURL} style={{height:'100px', width:'100px', marginTop:'10px'}} className="card-img-top" alt="Author"/>
                    <div className="card-body">
                        <h5 className="card-title">{question.author}</h5>
                        <p className="fw-light">{new Date(question.timestamp).toDateString()}</p>
                        <button className="btn btn-primary">Show</button>
                    </div>
            </div>
        </Link>
    );
}

export default connect()(Card);
