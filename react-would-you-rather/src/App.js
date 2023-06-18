import React, { useEffect } from 'react';
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import { connect } from "react-redux";
import Login from "./components/Login";
import { handleInitialData } from "./actions/shared";
import Leaderboard from "./components/Leaderboard";
import PageNotFound from "./components/PageNotFound";
import ValidLogin from "./components/ValidLogin";
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ dispatch, loggedIn }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="container mx-auto py-4">
      {loggedIn && <Nav />}
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<ValidLogin><Dashboard /></ValidLogin>} />
        <Route path="/leaderboard" exact element={<ValidLogin><Leaderboard /></ValidLogin>} />
        <Route path="/questions/:id" element={<ValidLogin><PollPage /></ValidLogin>} />
        <Route path="/new" exact element={<ValidLogin><NewPoll /></ValidLogin>} />
        <Route path="/404" exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);