import "./App.css";
import React from "react";
import NavigatorBar from "./components/Navbar/NavigatorBar";
import Footer from "./components/Footer/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div className="App">
      <div className="col">
        <div className="row">
          <NavigatorBar />
        </div>
        <div className="row">
          <HomePage></HomePage>
        </div>
        <div className="row">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
export default App;
