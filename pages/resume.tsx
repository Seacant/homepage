import Head from 'next/head'
import styles from './resume.module.css'
import { stripIndent } from 'common-tags'

const Resume = () => <>
  <Head>
    <title>Travis' Resume</title>
  </Head>
  <a className={styles.banner} onClick={() => window.print()} href="#">
    Psst! Need a PDF?
  </a>
  <article className={[styles.letter, styles.retro].join(" ")}>
    <section className={styles.block_left}>
      <div>
        <h2> Travis Fletcher </h2>
        <span> Full Stack Senior Software Engineer </span>
      </div>
      <address className={styles.block_right}>
        <div>
          <a href="github.com/Seacant"> GitHub @ Seacant </a>
        </div>
        <div>
          <a href="https://tfletch.tech"> tfletch.tech </a>
        </div>
        <div>
          <a href="mailto:contact@tfletch.tech"> contact@tfletch.tech </a>
        </div>
      </address>
    </section>
    <section>
      <h2>Technical Skills</h2> 
      <div>
        Languages: 
        <div> Typescript, Ruby, HTML/CSS, Perl, SQL, Rust </div>
      </div>
      <div>
        Technologies: 
        <div> React, Ruby on Rails, Terraform, AWS </div>
      </div>
      <div>
        Techniques:
        <div> Domain-Driven Design, Functional Programming, Test-Driven Development  </div>
      </div>
      <div>
        Specialties: 
        <div> Software/Feature Architecture, Performance & Scalability, Accessibility, Machine Learning </div>
      </div>
    </section>
    <section>
      <h2>Education</h2>
      <div> 
        Loveland High School 
        <span className={styles.right}>2014-2017</span> 
      </div>

      <div>
        Northern Kentucky University 
        <span className={styles.right}>2017-2021</span> 
        <div>Data Science Major & Management Minor </div>
      </div>
    </section>
    <section>
      <h2>Employment</h2>
      <div>
        Instructure
          <div>
            Senior Software Engineer
            <span className={styles.right}>
              2022-&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div>
            Software Engineer 
            <span className={styles.right}>
              2021-2022
            </span>
          </div>
  
          <ul>
            <li>
              Maintained and scaled Ruby on Rails app with 10000+ Rps across 500+ servers
            </li>
            <li> 
              Worked extensively with Product to plan projects that solved customer needs
            </li>
            <li> Led technical discussions during Software Architecture Planning </li>
            <li> Championed accessible web design during front-end discussions </li>
          </ul>
      </div>
      <div>
        Certica Solutions 
          <div>
            Software Engineer
            <span className={styles.right}> 2019-2021 </span>
          </div>
          <div>
            Junior Software Engineer 
            <span className={styles.right}> 2015-2019 </span>
          </div>
  
          <ul>
            <li> Provide front-end website and database support to both internal and external clients </li>
            <li> Develop unit tests for legacy monolithic codebase </li>
            <li> Maintain a RESTful JSON API with a full regression testing suite </li>
            <li> Use domain-driven design to retrofit OOP to codebase </li>
          </ul>
      </div>
      <div>
        Northern Kentucky University
        <div>
          Research Assistant 
            <span className={styles.right}> 2018-2019 </span>
        </div>
        <ul>
          <li> Developed an Internet of Things security management solution, Java Experience </li>
          <li> Presented findings at NKU Celebration of Student Research </li>
        </ul>
      </div>

    </section>
    <section>
      <h2> Experience </h2>
      <div>
        FTC Robotics 
          <span className={styles.right}> 2015-2017 </span>
          <div> Lead Programmer </div>
          <div> Java, Android Studio, Github, Gradle, and Vim </div>
          <div> Created a robot using Java to compete in predetermined challenges </div>
      </div>
      <div>
        UC IT Expo 
          <span className={styles.right}> 2016 </span>
          <div> Lead Programmer; 1st place (High School category) </div>
          <div> Developed a low-cost camera mount to follow a lecturer during class </div>
      </div>
      <div>
        RevolutionUC 
          <span className={styles.right}> 2017 </span>
          <div> 24-hour hackathon </div>
          <div> V-Arrrgh - Virtual Reality therapy program for Amblyopia, C#; 1st place </div>
      </div>
    </section>
  </article>
</>

export default Resume
