import React from "react";
import Header from "../components/Header";
import "./home.css";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";

function HomeScreen() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

export default HomeScreen;
