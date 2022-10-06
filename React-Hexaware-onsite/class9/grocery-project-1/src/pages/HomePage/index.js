import React from "react";
import CategoryList from "../../components/CategoryList";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <CategoryList />
      </div>
    </>
  );
};
export default HomePage;
