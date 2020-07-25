import React from "react";
import Layout from "../components/common/Layout";

interface ILayoutProps {
  title?: string;
}

const HomePage: React.FC<ILayoutProps> = (props) => (
  <Layout title="Home">
    <div>HOME</div>
  </Layout>
);

export default HomePage;
