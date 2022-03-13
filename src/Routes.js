import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import AppContainer from "./components/containers/AppContainer";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Switch>
      </AppContainer>
    </Router>
  );
}
