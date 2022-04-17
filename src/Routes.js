import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import AppContainer from "./components/containers/AppContainer";
import About from "./pages/About";
import Home from "./pages/Home";
import Job from "./pages/Jobs/Job";
import JobsList from "./pages/Jobs/JobsList";
import AddJob from "./pages/Jobs/AddJob";
import Login from "./pages/Login";
import Resources from "./pages/Resources";

export default function Routes() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/jobs/addJob" element={<AddJob />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Switch>
      </AppContainer>
    </Router>
  );
}
