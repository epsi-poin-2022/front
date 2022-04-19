import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Illustration from "../components/elements/Illustration";
import JobsCards from "../components/elements/JobsCards";
import Questions from "../components/elements/Questions";
import Title from "../components/elements/Title";
import RequestAPI from "../utils/RequestAPI";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: calc(100vh - 80px);
  position: relative;
  align-items: center;
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  width: 45vw;
`;

const Info = styled.div`
  width: 70%;
  margin-left: auto;
`;

export default function Home() {
  const [index, setIndex] = useState(0);
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
        const res = await RequestAPI("GET", "skills?page=1");
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
          } catch (e) {
            console.log(e);
          }
        })
      ).then(() => setJobs(tempJobs));
    }
  }, [rawJobs, rawSkills, rawTitles]);

  return (
    <>
      <Container>
        <InfoContainer>
          <Info>
            <Title title="Présente le numérique" />
            <h2>
              Donec rhoncus varius ornare. Praesent sed lacinia nisi. Etiam
              euismod in enim eu ornare. Sed bibendum imperdiet orci, nec
              venenatis erat ultrices vitae. Nunc congue nulla ut nibh iaculis
              blandit. Aenean pulvinar ipsum mauris, non malesuada ipsum luctus
              sed. Duis vitae pretium nunc. Praesent vitae semper lorem. Ut
              suscipit lobortis vehicula. In sodales massa sit amet maximus
              condimentum.
            </h2>
          </Info>
        </InfoContainer>
        <Illustration src="/img/nomad.svg" title="Digital" />
      </Container>
      <>
        {questions && (
          <Questions
            index={index}
            setIndex={setIndex}
            questions={questions}
            setSkills={setSkills}
            skills={skills}
            dislikes={dislikes}
            setDislikes={setDislikes}
          />
        )}
        {jobs && <JobsCards jobs={jobs} skills={skills} dislikes={dislikes} />}
      </>
    </>
  );
}
