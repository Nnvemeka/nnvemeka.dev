import React from "react";
import Article from "../components/article/Article";
import Layout from "../layout/Layout";

const ArticlePage = () => (
  <Layout active="article" title="Articles">
    <Article />
  </Layout>
);

export default ArticlePage;