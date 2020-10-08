import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderComponent from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import HeroCards from "./Components/hero-cards/HeroCards";
import About from "./Components/about/About";
import Why from "./Components/why/Why";
import Latest from "./Components/latest/Latest";
import Teachers from "./Components/teachers/Teachers";
import Video from "./Components/video/Video";
import Footer from "./Components/footer/Footer";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          {" "}
          <Route path="/" component={HeaderComponent} />{" "}
        </Switch>{" "}
        <Hero> </Hero> <HeroCards> </HeroCards> <About> </About> <Why></Why>
        <Latest> </Latest> <Teachers> </Teachers> <Video> </Video>{" "}
        <Footer> </Footer>{" "}
      </Router>
    );
  }
}
