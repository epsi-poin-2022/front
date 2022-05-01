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
import ResourcesList from "./pages/Resources/ResourcesList";

export default function Routes() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/resources" element={<ResourcesList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Switch>
      </AppContainer>
    </Router>
  );
}
