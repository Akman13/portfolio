import './App.css';
import About from './components/about/About';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from './components/projects/Projects';
import axios from 'axios';
import { React, useEffect, useState } from 'react';


function App() {
  const readtoken = process.env.REACT_APP_READ_TOKEN;
  const [data, setData] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const url = `https://api.buttercms.com/v2/pages/portfolio/portfolio-site?auth_token=${readtoken}`;

      axios.get(url).then(res => {
        setData(res.data.data.fields.portfolio_site);

      }).catch(err => {
        console.log(err);
      })
    }

    getData();
  }, [])

  return (
    <div className="App">
      <Navbar content={data[1]}/>
      <Home content={data[0]}/>
      <About content={[data[2], data[1]]}/>
      <Skills content={data[3]}/>
      <Projects content={[data[4], data[3]]}/>
      <Contact content={data[1]}/>
    </div>
  );
}

export default App;
