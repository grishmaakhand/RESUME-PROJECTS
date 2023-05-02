import "./App.css";
import NavBar from "../src/components/Navbar.js";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="home"
                  pageSize={6}
                  category="general"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={6}
                  category="business"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={6}
                  category="entertainment"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={6}
                  category="general"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  category="health"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={6}
                  category="science"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  category="sports"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  category="technology"
                  vApiKey={this.apiKey}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
