import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Illustration from "../../components/elements/Illustration";
import JobsSection from "./JobsSection";
import Loader from "../../components/elements/Loader";
import RequestAPI from "../../utils/RequestAPI";
import QuestionsSection from "./QuestionsSection";
import { APP_TITLE, HOME_PARAGRAPH } from "../../utils/ApplicationText";
const Container = styled.div`
  display: flex;
  overflow: hidden;
  // height: calc(100vh - 80px);
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding-block: 25px;
`;
const BackgroundContainer = styled.div`
  position: relative;
  &:after {
    position: absolute;
    background-position: center;
    top: 0;
    bottom: 0;
    left: 60%;
    right: 0;
    background-image: url("/img/nomad.svg");
    background-repeat: no-repeat;
    content: "";
    z-index: -1;
    opacity: 50%;
  }
  &:before {
    position: absolute;
    background-position: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 60%;
    background-image: url("/img/mobile.svg");
    background-repeat: no-repeat;
    content: "";
    z-index: -1;
    opacity: 50%;
  }
`;

const InfoContainer = styled.div`
  width: 45vw;
`;

const Info = styled.div`
  width: 70%;
  margin: auto;
`;

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [jobs, setJobs] = useState();
  const [rawJobs, setRawJobs] = useState();
  const [rawSkills, setRawSkills] = useState();
  const [rawTitles, setRawTitles] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await RequestAPI("GET", "job_descriptions?page=1");
        setRawJobs(res.data);
      } catch (e) {}
    })();
    (async () => {
      try {
        const res = await RequestAPI("GET", "skills?page=1");
        setRawSkills(res.data);
      } catch (e) {}
    })();
    (async () => {
      try {
        const res = await RequestAPI("GET", "job_titles?page=1");
        setRawTitles(res.data);
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    if (rawJobs && rawSkills && rawTitles) {
      let tempQuestions = [];
      rawSkills.forEach((skill) => {
        let question = {
          skill: skill.name,
          title: skill.question,
        };
        tempQuestions.push(question);
      });
      setQuestions(tempQuestions);
      let tempJobs = [];
      Promise.all(
        rawJobs.map(async (description) => {
          let path = description.picture.split("/api/")[1];
          try {
            const res = await RequestAPI("GET", path);
            let officialTitle;
            description.jobTitles.forEach((jobTitle) => {
              let jobTitleId = jobTitle.split("/api/job_titles/")[1];
              rawTitles.forEach((title) => {
                if (
                  title.id === parseInt(jobTitleId) &&
                  title.isDefault === true
                ) {
                  officialTitle = title.label;
                }
              });
            });
            let temp = description.skills.map(
              (skill) => skill.split("/api/skills/")[1]
            );
            let jobSkills = [];
            rawSkills.forEach((skill_1) => {
              if (temp.includes(skill_1.id.toString())) {
                jobSkills.push(skill_1.name);
              }
            });
            const jobInfo = {
              title: officialTitle,
              id: description.id,
              description: description.shortDescription,
              img: res.data.filePath,
              skills: jobSkills,
            };
            tempJobs.push(jobInfo);
            tempJobs.push(jobInfo);
            tempJobs.push(jobInfo);
            tempJobs.push(jobInfo);
            tempJobs.push(jobInfo);
            tempJobs.push(jobInfo);
          } catch (e) {
            return console.log(e);
          }
        })
      ).then(() => {
        setJobs(tempJobs);
      });
    }
  }, [rawJobs, rawSkills, rawTitles]);

  return (
    <>
      {jobs ? (
        <BackgroundContainer>
          <QuestionsSection
            questions={questions}
            setSkills={setSkills}
            skills={skills}
            dislikes={dislikes}
            setDislikes={setDislikes}
          />
          <JobsSection jobs={jobs} skills={skills} dislikes={dislikes} />
          {/* <img /> */}
        </BackgroundContainer>
      ) : (
        <Loader />
      )}
      <Container>
        {/* <InfoContainer> */}
        <Info>
          <h1>{APP_TITLE}</h1>
          <h3 style={{ paddingTop: 25, fontWeight: "normal" }}>
            {HOME_PARAGRAPH}
          </h3>
        </Info>
        {/* </InfoContainer> */}
        {/* <Illustration src="/img/nomad.svg" title="Digital" /> */}
      </Container>
    </>
  );
}
