import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Get from "./Get";
import Home from "./Home";
import Post from "./Post";

class Rest extends Component {
  render() {
    return (
      <>
        <Home />
        <Routes>
          <Route path="/get" element={<Get />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </>
    );
  }
}

export default Rest;
