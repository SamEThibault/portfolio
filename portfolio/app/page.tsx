"use client";

import { NextPage } from "next";
import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { aboutLines, experienceLines } from "./static";
import "./globals.css";

const Home: NextPage = () => {
  const [step, setStep] = useState(0);
  const shellRef = useRef<HTMLDivElement>(null);

  const finishAbout = () => setStep(1);
  const finishExperience = () => setStep(2);

  return (
    <div className={`cli-container ${step >= 2 ? "show-blink" : ""}`}>
      <div className="cli-shell" ref={shellRef}>
        {step >= 0 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <div className={step > 0 ? "hide-cursor" : ""}>
              <Typewriter
                onInit={(tw) => {
                  tw.typeString("cat about.py")
                    .pauseFor(300)
                    .callFunction(finishAbout)
                    .start();
                }}
                options={{ cursor: "_", delay: 50 }}
              />
            </div>
          </div>
        )}

        {step >= 1 && (
          <pre className="cli-output">
            {aboutLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
        )}

        {step >= 1 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <div className={step > 1 ? "hide-cursor" : ""}>
              <Typewriter
                onInit={(tw) => {
                  tw.typeString("list experience")
                    .pauseFor(300)
                    .callFunction(finishExperience)
                    .start();
                }}
                options={{ cursor: "_", delay: 50 }}
              />
            </div>
          </div>
        )}

        {step >= 2 && (
          <pre className="cli-output">
            {experienceLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
        )}

        {step >= 2 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <Typewriter
              onInit={(tw) => {
                tw.typeString("")
                  .pauseFor(300)
                  .callFunction(() => setStep(3))
                  .start();
              }}
              options={{ cursor: "_", delay: 50 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
