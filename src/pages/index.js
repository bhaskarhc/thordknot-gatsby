// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import NavBarHeader from "../components/navbar";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div className="container bg-gray-400 w-full bg-auto mx-auto">
      <div class="bg-[url('../images/thordknot/hero1.png')] bg-cover min-h-screen">
        <NavBarHeader></NavBarHeader>
      </div>
      <button className="btn btn-info">Start</button>
      <h1>Hello world</h1>
    </div>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
