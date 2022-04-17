import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import AppContainer from "./components/containers/AppContainer";
import Home from "./pages/Home";
import AddJob from "./pages/Jobs/AddJob";
import Job from "./pages/Jobs/Job";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/jobs/addJob" element={<AddJob />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Switch>
      </AppContainer>
    </Router>
  );
}
