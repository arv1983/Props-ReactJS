import React from "react";
import "./App.css";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Title text="Aprendendo React" />
        <SubTitle text="Exercício sobre props" />
        <Body text="Prática leva a perfeição!" feeling="<3" />
        <Footer text="Repetição para praticar" />
      </div>
    );
  }
}

export default App;
