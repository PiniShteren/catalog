import React, { useEffect, useState } from 'react';
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
  const [exmpleArr, setExmpleArr] = useState([]);
  const [data, setData] = useState(Data.catalog);
  const [dataToPrint, setDataToPrint] = useState(Data.catalog);
  const [flag, setFalg] = useState(false);
  const [index, setIndex] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const sendMarginTop = (width) => {
    setMarginTop(width + 5);
  }
  const sendMarginBottom = (width) => {
    setMarginBottom(width + 5);
  }
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
  const exmpleProducts = () => {
    debugger
    setExmpleArr([]);
    for (let i = 0; i < 3; i++) {
      let rand = Math.round(Math.random() * data.length - 1);
      let objProducts = data[rand];
      objProducts.index = rand
      console.log(data[rand]);
      setExmpleArr([...exmpleArr, objProducts])
    }
    // return exmplArr.map((e))
  }
  useEffect(
    () => {
      exmpleProducts()
    }, []
  )

  return (
    <div className="App">
      <Router>
        <div className="Head">
          <Header search={search} sendMarginTop={sendMarginTop} />
        </div>
        <div className="body" style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}>
          <Switch>
            <Route exact path="/" component={() => {
              return <Home data={exmpleArr} />
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
          <Footer sendMarginBottom={sendMarginBottom} />
        </div>
      </Router>
    </div>
  );
}

export default App;
