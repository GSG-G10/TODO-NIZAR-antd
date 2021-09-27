import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Todo from "./Components/Todo";
import ShowTasks from "./ShowAddedTasks";
const { Header, Footer, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{color: "white"}}>Header</Header>
        <Content style={{ height: "40vh" }}>
          <Todo />
          <ShowTasks />
        </Content>
        <Footer >Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
