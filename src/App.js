import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Data from "./components/data/doors.json";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Content from "./components/Content/Content";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";

function App() {

  const [data, setData] = useState(Data.catalog);
  const [dataToPrint, setDataToPrint] = useState(Data.catalog);
  const [flag, setFalg] = useState(false);
  const [index, setIndex] = useState(0);
  const [scroll, setScroll] = useState(0);

  const search = (e) => {
    if (e) {
      let searchData = data.filter((element) => element.NAME.indexOf(e) >= 0);
      if (searchData) {
        setDataToPrint(searchData);
      } else {
        setDataToPrint('')
      }
    } else {
      setDataToPrint(data);
    }
  }
  const sendIndex = (i, windowScroll) => {
    setIndex(i);
    setScroll(windowScroll);
  }
  return (
    <div className="App">
      <Router>
        <div className="Head">
          <Header search={search} />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={() => {
              return <Home data={dataToPrint} />
            }} />
            <Route path="/catalog" component={() => {
              return <Catalog data={dataToPrint} sendIndex={sendIndex} scroll={scroll} />
            }} />
            <Route path="/content" component={() => {
              return <Content />
            }} />
            <Route path="/about" component={() => {
              return <About />
            }} />
            <Route path="/product" component={() => {
              return <Product name={data[index].NAME} img={data[index].IMAGE} description={data[index].DESCRIPTION} structure={data[index]['SRTUCTURE-DOOR']} coloring={data[index]['COLORING-PROCESS']} locking={data[index]['LOCKING-SYSTEM']} design={data[index]['DOOR-DESIGN']} />
            }} />
          </Switch>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
