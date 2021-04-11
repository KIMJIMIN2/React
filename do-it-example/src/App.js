import React, { Component } from "react";
import "./App.css";
import TodaysPlan from './03/PropsComponent';
import PropsComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";

class App extends Component {
  render() {
    return (
      <div>
        <div><b>지루할 떄 : </b><BooleanComponent bored/></div>
        <div><b>즐거울 떄 : </b><BooleanComponent /></div>
      </div>
    );
  }
}

export default App;
