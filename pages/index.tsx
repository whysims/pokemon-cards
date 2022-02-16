import { Layout } from "antd";
import type { NextPage } from "next";
import { HeaderLayout } from "../components/Header/Header";
import { LatestCards } from "../components/LatestCards/LatestCards";

const Home: NextPage = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <HeaderLayout />
      <Content style={{ padding: 50 }}>
        <div style={{ width: "100vw" }}>
          <LatestCards />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
