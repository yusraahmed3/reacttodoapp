import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between p-20">
      <h1 className="text-9xl font-extrabold">Quiz App</h1>
      <Link to="/quiz">
        <div className="border border-cyan-800 rounded-full w-52 p-2 text-center hover:bg-cyan-800 hover:text-white hover:border-white hover:cursor-pointer transition duration-75">
          Start playing
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
