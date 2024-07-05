import Head from "next/head";
import { Button } from "../components/Button";
import styled from "styled-components";

const PdfButton = styled(Button)`
  margin: auto;
  margin-bottom: 1ch;

  @media print {
    display: none;
  }
`;

const RetroLetter = styled.article`
  @media print {
    margin-left: -0.25in;
    font-size: 14px;
    line-height: 14px;
    color: black;

    & a {
      text-decoration: none;
      color: black;
    }
  }

  /* since we are taking away the normal site gutters, add back 
   * something reminiscent of real paper margins
  */
  @media (max-width: 8.5in) {
    margin-left: 0.5in;
    margin-right: 0.5in;
  }

  max-width: 7.5in;
  display: flex;
  flex-direction: column;
  grid-column: -1 / 1;
  gap: 1ch;
  margin: auto;

  font-family: var(--mono-font);
  line-height: 1.2em;
  font-weight: 500;

  & ul {
    margin: 0.25em;
  }
`;

const GenericSection = styled.section`
  display: contents;
  break-before: auto;
  break-inside: avoid;
`;

const Year = styled.span<{ $single?: true }>`
  float: right;

  /* 20xx-20xx is 9 characters */
  ${({ $single }) => ($single ? "width: 5ch" : "width: 9ch")}
`;

const SectionProse = styled.div`
  margin-left: 2ch;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > ${Year} {
    margin-left: auto;
  }
`;

const Introduction = styled(GenericSection)`
  display: flex;
  justify-content: space-between;
`;

const ContactInfo = styled.address`
  text-align: right;

  // leave some room for focus outline
  > div {
    padding-block: 2px;
  }
`;

const Header = styled.h2`
  text-transform: uppercase;
  margin: 0;
  line-height: 1.1em;
`;

const Resume = () => (
  <>
    <Head>
      <title>Travis' Resume</title>
    </Head>
    <PdfButton onClick={() => window.print()}>Psst! Need a PDF?</PdfButton>
    <RetroLetter>
      <Introduction>
        <div>
          <Header> Travis Fletcher </Header>
          <span> Full Stack Senior Software Engineer </span>
        </div>
        <ContactInfo>
          <div>
            <a href="https://github.com/Seacant"> GitHub @ Seacant </a>
          </div>
          <div>
            <a href="https://tfletch.tech"> tfletch.tech </a>
          </div>
          <div>
            <a href="mailto:contact@tfletch.tech"> contact@tfletch.tech </a>
          </div>
        </ContactInfo>
      </Introduction>
      <GenericSection>
        <Header>Technical Skills</Header>
        <div>
          Languages:
          <SectionProse>
            {" "}
            Typescript, Ruby, HTML/CSS, Perl, SQL, Rust{" "}
          </SectionProse>
        </div>
        <div>
          Technologies:
          <SectionProse> React, Ruby on Rails, Terraform, AWS </SectionProse>
        </div>
        <div>
          Techniques:
          <SectionProse>
            Domain-Driven Design, Functional Programming, Test-Driven
            Development
          </SectionProse>
        </div>
        <div>
          Specialties:
          <SectionProse>
            Software/Feature Architecture, Performance & Scalability,
            Accessibility, Machine Learning
          </SectionProse>
        </div>
      </GenericSection>
      <GenericSection>
        <Header>Education</Header>
        <div>
          Loveland High School
          <Year>2014-2017</Year>
        </div>

        <div>
          Northern Kentucky University
          <Year>2017-2021</Year>
          <SectionProse>Data Science Major & Management Minor </SectionProse>
        </div>
      </GenericSection>
      <GenericSection>
        <Header>Employment</Header>
        <div>
          ExamSpark
          <SectionProse>
            Senior Software Engineer
            <Year>2023-</Year>
          </SectionProse>
          <ul>
            <li>
              Developed in cutting-edge cloud-native AWS Amplify environment via
              full-stack Typescript
            </li>
          </ul>
        </div>
        <div>
          Instructure
          <SectionProse>
            Senior Software Engineer
            <Year>2022-2023</Year>
          </SectionProse>
          <SectionProse>
            Software Engineer
            <Year>2021-2022</Year>
          </SectionProse>
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
          <SectionProse>
            Software Engineer
            <Year>2019-2021</Year>
          </SectionProse>
          <SectionProse>
            Junior Software Engineer
            <Year>2015-2019</Year>
          </SectionProse>
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
          <SectionProse>
            Research Assistant
            <Year> 2018-2019 </Year>
          </SectionProse>
          <ul>
            <li>
              Developed an Internet of Things security management solution, Java
              Experience
            </li>
            <li> Presented findings at NKU Celebration of Student Research </li>
          </ul>
        </div>
      </GenericSection>
      <GenericSection>
        <Header> Experience </Header>
        <div>
          FTC Robotics
          <Year>2015-2017</Year>
          <SectionProse> Lead Programmer </SectionProse>
          <SectionProse>
            {" "}
            Java, Android Studio, Github, Gradle, and Vim{" "}
          </SectionProse>
          <SectionProse>
            Created a robot using Java to compete in predetermined challenges
          </SectionProse>
        </div>
        <div>
          UC IT Expo
          <Year $single> 2016 </Year>
          <SectionProse>
            {" "}
            Lead Programmer; 1st place (High School category){" "}
          </SectionProse>
          <SectionProse>
            Developed a low-cost camera mount to follow a lecturer during class
          </SectionProse>
        </div>
        <div>
          RevolutionUC
          <Year $single> 2017 </Year>
          <SectionProse> 24-hour hackathon </SectionProse>
          <SectionProse>
            V-Arrrgh - Virtual Reality therapy program for Amblyopia, C#; 1st
            place
          </SectionProse>
        </div>
      </GenericSection>
    </RetroLetter>
  </>
);

export default Resume;
