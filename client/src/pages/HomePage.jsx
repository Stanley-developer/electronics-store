import React from "react";
import "./HomePage.css";
import Hero from "./../components/homepagecomponents/Hero";
import Categories from "./../components/homepagecomponents/Categories";
import NewArrivals from "./../components/homepagecomponents/Newarrivals";
import Flashdeals from "../components/homepagecomponents/flashdeals";
import Header from "./../components/Header";

export default function HomePage() {
  return (
    <>
      <main className="home">
        <Hero />
        <Categories />
        <NewArrivals />
        <Flashdeals />
      </main>
    </>
  );
}
