import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BORDER_RADIUS,
  HOVER_SHADOW,
  LIGHT,
  PRIMARY,
  SHADOW,
  TRANSITION,
} from "../../utils/Constants";
import RequestAPI from "../../utils/RequestAPI";
import Loader from "../../components/elements/Loader";
import {
  JOB_CONDITION,
  JOB_OBJECTIVE,
  JOB_RECRUITMENT,
  JOB_RESPONSIBILITY,
  JOB_SALARY,
  JOB_SKILL,
  JOB_TITLE,
} from "../../utils/ApplicationText";

const Section = styled.div`
  width: 80%;
  margin: 5vh auto;
  display: flex;
  justify-content: space-around;
`;
const SectionItem = styled.div`
  width: 48%;
  display: ${(props) => props.flex && "flex"};
`;
const InfoSection = styled.div`
  padding-block: 15px;
`;
const InfoTitle = styled.h3`
  // text-align: center;
  color: ${PRIMARY};
  text-decoration: underline;
  font-size: 1.5rem;
  padding-bottom: 5px;
`;
const SchoolGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 5vw;
`;
const Card = styled.a`
  position: relative;
  display: flex;
  height: 100%;
  border-radius: ${BORDER_RADIUS}px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: ${SHADOW};
  min-height: 150px;
  transition: ${TRANSITION};
  &:hover {
    box-shadow: ${HOVER_SHADOW};
  }
`;
const Image = styled.img`
  display: flex;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.p`
  font-weight:bold;
  text-transform :capitalize;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color:${LIGHT}
}`;
const SchoolCard = ({ school }) => {
  return (
    <Card href={school.website} target="_blank">
      <Image src={school.filePath} alt={school.name} />
      <CardTitle>{school.name}</CardTitle>
    </Card>
  );
};
export default function Job() {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState();
  const [rawJob, setRawJob] = useState();
  const [rawTitles, setRawTitles] = useState();
  const [rawSkills, setRawSkills] = useState();
  const [rawSchools, setRawSchools] = useState();
  const [schools, setSchools] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await RequestAPI("GET", `job_descriptions/${id}`);
        setRawJob(res.data);
        console.log(res.data);
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
    (async () => {
      try {
        const res = await RequestAPI("GET", "schools?page=1");
        setRawSchools(res.data);
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    if (rawJob && rawSkills && rawTitles) {
      (async () => {
        let path = rawJob.picture.split("/api/")[1];
        try {
          const res = await RequestAPI("GET", path);
          let officialTitle;
          let subTitles = [];
          rawJob.jobTitles.forEach((jobTitle) => {
            let jobTitleId = jobTitle.split("/api/job_titles/")[1];
            rawTitles.forEach((title) => {
              if (
                title.id === parseInt(jobTitleId) &&
                title.isDefault === true
              ) {
                officialTitle = title.label;
              } else if (title.id === parseInt(jobTitleId)) {
                subTitles.push(title);
              }
            });
          });
          console.log(subTitles);
          let temp = rawJob.skills.map(
            (skill) => skill.split("/api/skills/")[1]
          );
          let jobSkills = [];
          rawSkills.forEach((skill_1) => {
            if (temp.includes(skill_1.id.toString())) {
              jobSkills.push(skill_1.name);
            }
          });
          const jobInfo = {
            ...rawJob,
            title: officialTitle,
            subTitles: subTitles,
            img: res.data.filePath,
            skills: jobSkills,
          };
          setData([jobInfo]);
        } catch (e) {
          return console.log(e);
        }
      })();
    }
  }, [rawJob, rawSkills, rawTitles, rawSchools]);

  useEffect(() => {
    if (rawJob && rawSchools) {
      let schools = [];
      Promise.all(
        rawSchools.map((school) =>
          Promise.all(
            school.jobDescriptions.map(async (job) => {
              let jobId = job.split("/api/job_descriptions/")[1];
              if (jobId === id) {
                let path = school.logo.split("/api/")[1];
                try {
                  const res = await RequestAPI("GET", path);
                  schools.push({ ...school, ...res.data });
                } catch (e) {
                  return console.log(e);
                }
              }
            })
          ).then(() => {})
        )
      ).then(() => {
        setSchools(schools);
      });
    }
  }, [rawJob, rawSchools]);

  return (
    <>
      <Section>
        {data ? (
          data.map((job) => {
            const {
              title,
              subTitles,
              img,
              comment,
              jobDutiesResponsibilities,
              jobPurpose,
              jobSalary,
              recruitment,
              skills,
              workingConditions,
            } = job;
            return (
              <>
                <SectionItem flex>
                  <img
                    src={img}
                    alt={title}
                    style={{ width: "100%", height: "auto", margin: "auto" }}
                  />
                </SectionItem>
                <SectionItem>
                  <h1 style={{ textAlign: "center" }}>{title}</h1>
                  {subTitles.length > 0 && (
                    <InfoSection>
                      <InfoTitle>{JOB_TITLE}</InfoTitle>
                      <ul>
                        {subTitles.map((subTitle, i) => (
                          <li
                            style={{
                              textTransform: "capitalize",
                              listStyle: "none",
                            }}
                          >
                            {subTitle.label}
                          </li>
                        ))}
                      </ul>
                    </InfoSection>
                  )}
                  {skills && (
                    <InfoSection>
                      <InfoTitle>{JOB_SKILL}</InfoTitle>
                      <ul>
                        {skills.map((skill, i) => (
                          <li
                            style={{
                              listStyle: "none",
                            }}
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </InfoSection>
                  )}
                  {jobDutiesResponsibilities && (
                    <InfoSection>
                      <InfoTitle>{JOB_RESPONSIBILITY}</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobDutiesResponsibilities,
                        }}
                      />
                    </InfoSection>
                  )}
                  {jobPurpose && (
                    <InfoSection>
                      <InfoTitle>{JOB_OBJECTIVE}</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobPurpose,
                        }}
                      />
                    </InfoSection>
                  )}
                  {workingConditions && (
                    <InfoSection>
                      <InfoTitle>{JOB_CONDITION}</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: workingConditions,
                        }}
                      />
                    </InfoSection>
                  )}
                  {jobSalary && (
                    <InfoSection>
                      <InfoTitle>{JOB_SALARY}</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobSalary,
                        }}
                      />
                    </InfoSection>
                  )}
                  {recruitment && (
                    <InfoSection>
                      <InfoTitle>{JOB_RECRUITMENT}</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: recruitment,
                        }}
                      />
                    </InfoSection>
                  )}
                </SectionItem>
              </>
            );
          })
        ) : (
          <Loader />
        )}
      </Section>
      {schools && schools.length > 0 && (
        <Section>
          <SchoolGrid>
            {schools.map((school) => (
              <SchoolCard school={school} />
            ))}
          </SchoolGrid>
        </Section>
      )}
    </>
  );
}
