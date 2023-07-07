import "./App.css";
import Router from "./router";
import { NavLink } from "react-router-dom";
import { Space, Layout, Card } from "antd";

function App() {
  return (
    <Layout>
      <Layout.Header>
        <Space>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/canvasRandomMotion">Canvas 随机</NavLink>
        </Space>
      </Layout.Header>
      <Layout.Content>
        <Card>
          <Router />
        </Card>
      </Layout.Content>
    </Layout>
  );
}

export default App;
