import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Container from "./components/Container";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Container2 from "./components/Container2";
import Question from "./components/Question";
import Stats from "./components/Stats";
import Lucky from "./components/Lucky";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header></Header>
      <Cards></Cards>
      <Container></Container>
      <Features></Features>
      <Container2></Container2>
      <Question></Question>
      <Stats></Stats>
      <Lucky></Lucky>
      <Footer></Footer>
    </div>
  );
}

export default App;
