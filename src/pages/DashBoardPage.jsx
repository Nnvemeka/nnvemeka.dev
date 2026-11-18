import React from "react";
import Project from "../components/project/Project";
import Layout from "../layout/Layout";

const DashBoardPage = () => (
  <Layout home active="project" title="Projects">
    <Project />
  </Layout>
);

export default DashBoardPage;