import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import DashBoardPage from "./pages/DashBoardPage";
import ErrorPage from "./pages/ErrorPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectPreviewPage from "./pages/ProjectPreviewPage";
import ResumePage from "./pages/ResumePage";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashBoardPage} exact />
      <Route path="/project" component={ProjectPage} />
      <Route path="/preview/:id" component={ProjectPreviewPage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/article" component={ArticlePage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
