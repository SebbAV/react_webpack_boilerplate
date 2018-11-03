import React from "react";
import ReactDOM from "react-dom";
import door from '../public/assets/1_blue_circle.png'

const Index = () => {
  return <div><img src={door}/></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));