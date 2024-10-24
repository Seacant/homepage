"use client";
import React from "react";

import Head from "next/head";
import { PrintButton } from "./PrintButton";

import styles from "./page.module.css";

const Resume: React.FC = () => (
  <>
    <Head>
      <title>Travis' Resume</title>
    </Head>
    <PrintButton />
    <article className={styles["retro-letter"]}>
      <section className={styles["introduction"]}>
        <div>
          <h2 className={styles["header"]}> Travis Fletcher </h2>

          <span> Full Stack Senior Software Engineer </span>
        </div>
        <address className={styles["contact-info"]}>
          <div>
            <a href="https://github.com/Seacant"> GitHub @ Seacant </a>
          </div>
          <div>
            <a href="https://tfletch.tech"> tfletch.tech </a>
          </div>
          <div>
            <a href="mailto:contact@tfletch.tech"> contact@tfletch.tech </a>
          </div>
        </address>
      </section>
      <section className={styles["generic-section"]}>
        <h2 className={styles["header"]}>Technical Skills</h2>
        <div>
          Languages:
          <div className={styles["section-prose"]}>
            {" "}
            Typescript, Ruby, HTML/CSS, Perl, SQL, Rust
          </div>
        </div>
        <div>
          Technologies:
          <div className={styles["section-prose"]}>
            {" "}
            React, Ruby on Rails, Terraform, AWS{" "}
          </div>
        </div>
        <div>
          Techniques:
          <div className={styles["section-prose"]}>
            Domain-Driven Design, Functional Programming, Test-Driven
            Development
          </div>
        </div>
        <div>
          Specialties:
          <div className={styles["section-prose"]}>
            Software/Feature Architecture, Performance & Scalability,
            Accessibility, Machine Learning
          </div>
        </div>
      </section>
      <section className={styles["generic-section"]}>
        <h2 className={styles["header"]}>Education</h2>
        <div>
          Loveland High School
          <span className={styles["year"]}>2014-2017</span>
        </div>

        <div>
          Northern Kentucky University
          <span className={styles["year"]}>2017-2021</span>
          <div className={styles["section-prose"]}>
            Data Science Major & Management Minor
          </div>
        </div>
      </section>
      <section className={styles["generic-section"]}>
        <h2 className={styles["header"]}>Employment</h2>
        <div>
          ExamSpark
          <div className={styles["section-prose"]}>
            Senior Software Engineer
            <span className={styles["year"]}>2023-</span>
          </div>
          <ul>
            <li>
              Developed in cutting-edge cloud-native AWS Amplify environment via
              full-stack Typescript
            </li>
          </ul>
        </div>
        <div>
          Instructure
          <div className={styles["section-prose"]}>
            Senior Software Engineer
            <span className={styles["year"]}>2022-2023</span>
          </div>
          <div className={styles["section-prose"]}>
            Software Engineer
            <span className={styles["year"]}>2021-2022</span>
          </div>
          <ul>
            <li>
              Maintained and scaled Ruby on Rails app with 10000+ Rps across
              500+ servers
            </li>
            <li>
              Worked extensively with Product to plan projects that solved
              customer needs
            </li>
            <li>
              Led technical discussions during Software Architecture Planning
            </li>
            <li>
              Championed accessible web design during front-end discussions
            </li>
          </ul>
        </div>
        <div>
          Certica Solutions
          <div className={styles["section-prose"]}>
            Software Engineer
            <span className={styles["year"]}>2019-2021</span>
          </div>
          <div className={styles["section-prose"]}>
            Junior Software Engineer
            <span className={styles["year"]}>2015-2019</span>
          </div>
          <ul>
            <li>
              Provide front-end website and database support to both internal
              and external clients
            </li>
            <li>Develop unit tests for legacy monolithic codebase</li>
            <li>
              Maintain a RESTful JSON API with a full regression testing suite
            </li>
            <li> Use domain-driven design to retrofit OOP to codebase </li>
          </ul>
        </div>
        <div>
          Northern Kentucky University
          <div className={styles["section-prose"]}>
            Research Assistant
            <span className={styles["year"]}>2018-2019</span>
          </div>
          <ul>
            <li>
              Developed an Internet of Things security management solution, Java
              Experience
            </li>
            <li> Presented findings at NKU Celebration of Student Research </li>
          </ul>
        </div>
      </section>
      <section className={styles["generic-section"]}>
        <h2 className={styles["header"]}>Experience</h2>
        <div>
          FTC Robotics
          <span className={styles["year"]}>2015-2017</span>
          <div className={styles["section-prose"]}> Lead Programmer </div>
          <div className={styles["section-prose"]}>
            {" "}
            Java, Android Studio, Github, Gradle, and Vim{" "}
          </div>
          <div className={styles["section-prose"]}>
            Created a robot using Java to compete in predetermined challenges
          </div>
        </div>
        <div>
          UC IT Expo
          <span className={styles["year--single"]}>2016</span>
          <div className={styles["section-prose"]}>
            {" "}
            Lead Programmer; 1st place (High School category){" "}
          </div>
          <div className={styles["section-prose"]}>
            Developed a low-cost camera mount to follow a lecturer during class
          </div>
        </div>
        <div>
          RevolutionUC
          <span className={styles["year--single"]}>2017</span>
          <div className={styles["section-prose"]}> 24-hour hackathon </div>
          <div className={styles["section-prose"]}>
            V-Arrrgh - Virtual Reality therapy program for Amblyopia, C#; 1st
            place
          </div>
        </div>
      </section>
    </article>
  </>
);

export default Resume;
