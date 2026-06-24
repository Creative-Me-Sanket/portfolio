import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
        "AI Engineer",
        "RAG & Agentic AI Developer",
        "Full Stack Engineer",
        "Managing Music Academy",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
