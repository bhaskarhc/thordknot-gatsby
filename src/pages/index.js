// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import NavBarHeader from "../components/navbar";
import cardImage1 from "../images/thordknot/Mask group.png";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main className="bg-white ">
      <NavBarHeader></NavBarHeader>
      <div className="hero min-h-screen bg-[url('../images/thordknot/hero1.png')]">
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl text-white">
              Every picture tells a story. Let us help you tell yours with our
              <p className="text-yellow-500">Thirdknot photography</p>
            </h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="h-80 flex justify-around pt-5 px-5 w-full text-black ">
        <div className="w-1/2 text-start self-center">
          <h1 className="text-5xl align-middle">
            let’s tell your story together
          </h1>
        </div>
        <div className="w-1/2 self-center flex flex-col">
          <div className="text-justify">
            Breaking the stereotype of wedding captures, we are visual
            storytellers who bring a touch of candidness and emotions. We want
            to serve you throughout your day and entire planning process.
            Together, let’s document your memories and create images that help
            you relive your day. We hope that your films and photos leave you
            with effortless memories and all the feels.
          </div>

          <div className="text-center mt-5">
            We Don’t Just Narrate. We Transport You Back in Time
          </div>
        </div>
      </div>

      <div className="h-auto flex justify-around  m-5">
        <div className="image-show-card">
          <img src={cardImage1} className="max-w-sm rounded-lg shadow-2xl" />
        </div>

        <div className="text-dark self-center">
          <h1 className="text-5xl font-bold">We Tell Stories</h1>
        </div>
      </div>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;

{
  /* <div className="container bg-gray-400 w-full bg-auto mx-auto">
  <div class="bg-[url('../images/thordknot/hero1.png')] bg-cover min-h-screen">
    
    <div className="">
      <h3>iam black belt</h3>
    </div>
  </div>
  <button className="btn btn-info">Start</button>
  <h1>Hello world</h1>
</div>; */
}
