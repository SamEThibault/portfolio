"use client";

import { NextPage } from "next";
import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { aboutLines, experienceLines, projectsLines } from "./static";
import ResumeModal from "./components/ResumeModal";
import "./globals.css";

const Home: NextPage = () => {
  const [step, setStep] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  const finishList = () => setStep(1);
  const finishAbout = () => setStep(2);
  const finishExperience = () => setStep(3);
  const finishProjects = () => setStep(4);

  return (
    <div className={`cli-container ${step >= 4 ? "show-blink" : ""}`}>
      <div className="cli-shell" ref={shellRef}>
        {step >= 0 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <div className={step > 0 ? "hide-cursor" : ""}>
              <Typewriter
                onInit={(tw) => {
                  tw.typeString("ls")
                    .pauseFor(300)
                    .callFunction(finishList)
                    .start();
                }}
                options={{ cursor: "_", delay: 50 }}
              />
            </div>
          </div>
        )}

        {step >= 1 && (
          <pre className="cli-output">
            <a
              href="https://www.linkedin.com/in/samuelemardthibault/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            {"  "}
            <a
              href="https://github.com/SamEThibault"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {"  "}
            <a
              href="https://devpost.com/SamEThibault?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noreferrer"
            >
              Devpost
            </a>
            {"  "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowResume(true);
              }}
            >
              Resume
            </a>
            {"  "}
            <a
              href="mailto:sam5thibault@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </pre>
        )}

        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

        {step >= 1 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <div className={step > 1 ? "hide-cursor" : ""}>
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

        {step >= 2 && (
          <pre className="cli-output">
            {aboutLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
        )}

        {step >= 2 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <div className={step > 2 ? "hide-cursor" : ""}>
              <Typewriter
                onInit={(tw) => {
                  tw.typeString("sudo list experience --relevant")
                    .pauseFor(300)
                    .callFunction(finishExperience)
                    .start();
                }}
                options={{ cursor: "_", delay: 50 }}
              />
            </div>
          </div>
        )}

        {step >= 3 && (
          <pre className="cli-output">
            {experienceLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
        )}

        {step >= 3 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <div className={step > 3 ? "hide-cursor" : ""}>
              <Typewriter
                onInit={(tw) => {
                  tw.typeString("sudo list projects --favourites")
                    .pauseFor(300)
                    .callFunction(finishProjects)
                    .start();
                }}
                options={{ cursor: "_", delay: 50 }}
              />
            </div>
          </div>
        )}

        {step >= 4 && (
          <pre className="cli-output">
            <a
              href="https://github.com/SamEThibault/498-pwrAPI-ref"
              target="_blank"
              rel="noreferrer"
            >
              Sustainable Supercomputing
            </a>
            {"  "}
            <a
              href="https://github.com/SamEThibault/minute-tutor"
              target="_blank"
              rel="noreferrer"
            >
              On-demand Tutoring Platform
            </a>
            {"  "}
            <a
              href="https://github.com/SamEThibault/leaf-hack"
              target="_blank"
              rel="noreferrer"
            >
              AI Garden Companion
            </a>
            {"  "}
            <a
              href="https://github.com/SamEThibault/elec-374"
              target="_blank"
              rel="noreferrer"
            >
              Verilog CPU
            </a>
            {"  "}
            <a
              href="https://github.com/SamEThibault/link-hack"
              target="_blank"
              rel="noreferrer"
            >
              Citation Analyzer
            </a>
          </pre>
        )}

        {step >= 4 && (
          <div className="cli-prompt">
            <span className="cli-prefix">sam@portfolio:~$ </span>
            <Typewriter
              onInit={(tw) => {
                tw.typeString("").pauseFor(300).start();
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
