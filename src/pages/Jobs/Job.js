import styled from "@emotion/styled";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/containers/Header";
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
  color: ${PRIMARY};
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
  // border-radius: ${BORDER_RADIUS};
  overflow: hidden;
  text-decoration: none;
  box-shadow: ${SHADOW};
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
      console.log(rawJob);
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
          let temp = rawJob.skills.map(
            (skill) => skill.split("/api/skills/")[1]
          );
          let jobSkills = [];
          rawSkills.forEach((skill_1) => {
            if (temp.includes(skill_1.id.toString())) {
              jobSkills.push(skill_1.name);
            }
          });
          // console.log(rawSchools);
          // let schools = []
          // rawSchools.forEach((school) => {
          //   school.jobDescriptions.forEach((job) => {
          //     let jobId = job.split("/api/job_descriptions/")[1];
          //     if (jobId === id) {
          //       schools.push(school);
          //     }
          //   });
          // });
          const jobInfo = {
            ...rawJob,
            title: officialTitle,
            subTitles: subTitles,
            img: res.data.filePath,
            skills: jobSkills,
          };
          // const jobInfo = {
          //   title: officialTitle,
          //   subTitles: subTitles,
          //   id: rawJob.id,
          //   description: rawJob.shortDescription,
          //   img: res.data.filePath,
          //   skills: jobSkills,
          // };
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
  const jobData = {
    title: "Web Designeur",
    img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit enim, consequat aliquam mauris a, imperdiet rhoncus sem. Ut non hendrerit tellus, ac aliquam ante. Curabitur luctus pellentesque lacus, pulvinar dictum dui. Mauris efficitur mollis tortor interdum ultricies. In eget massa dignissim, dapibus lorem pretium, ultrices sem. Vestibulum ac risus volutpat, bibendum nulla sed, interdum lacus. Integer lacus nisi, convallis eget urna dapibus, vulputate rutrum lorem. In hac habitasse platea dictumst. Etiam egestas ac nulla in porta. Curabitur elementum porttitor enim, vel congue mauris viverra a. Proin mollis tortor sed magna imperdiet accumsan.</p>
        <p>Nam tortor lorem, suscipit vitae ante eu, dapibus <strong>efficitur</strong> nisi. Proin sodales, ipsum eu lobortis pretium, erat ex laoreet eros, et feugiat sapien turpis quis leo. In pulvinar odio id velit pharetra varius. Morbi pellentesque scelerisque risus. Etiam sit amet condimentum tortor, non pharetra ipsum. In mollis cursus orci, a aliquet ex condimentum a. Aliquam tempor euismod tortor, sed consequat massa tempus ut. Cras mollis metus tellus, pellentesque laoreet tortor tempor non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis purus nisi, at mattis lorem imperdiet et. Nunc pharetra velit tortor, et consequat tellus imperdiet eget. Fusce sem erat, posuere eu volutpat sit amet, tincidunt sed enim. Etiam pretium neque eu semper vulputate. Sed eget porttitor tortor, sed posuere elit. Etiam vel dolor at metus tincidunt accumsan. Aenean porttitor lacus in porta semper.</p>
        <p>Aenean et porttitor neque. Nullam consequat euismod nunc non vehicula. In hac habitasse platea dictumst. Vivamus mi mi, fermentum a egestas ac, interdum ut nunc. Vivamus malesuada ultricies lacus, vel gravida augue ultrices non. Sed nec congue sapien, sed suscipit nulla. Morbi posuere purus sit amet lectus feugiat elementum. Cras eu pulvinar dolor. Suspendisse et dui ullamcorper, fermentum magna eu, vehicula magna. Quisque lobortis vel ipsum ac iaculis.</p>
        <p>Pellentesque pretium tortor non egestas tincidunt. Aenean et faucibus elit. Donec hendrerit consectetur massa, at rhoncus libero scelerisque non. Maecenas condimentum dolor sit amet magna dignissim vulputate et in lorem. Suspendisse accumsan libero non neque facilisis, sodales convallis arcu posuere. Sed tempus consequat quam ut iaculis. Nullam eget neque eget turpis cursus tempus nec et mauris. Nam feugiat velit accumsan, convallis sapien eu, dignissim lectus. Phasellus viverra orci quis rhoncus porta. Sed egestas, libero in laoreet luctus, metus augue vehicula orci, ut venenatis erat nisl non felis. Vivamus sollicitudin leo quis turpis ultrices, at posuere est accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in augue nunc. Mauris nec pellentesque dui.</p>
        <p>Vestibulum iaculis sem augue, in feugiat nibh auctor vitae. Cras consequat ipsum vel magna lobortis, a eleifend tortor dapibus. Donec ut varius magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum tellus sed velit efficitur elementum. Nulla vel odio enim. Mauris tortor orci, aliquam at risus vel, auctor dignissim ante. Quisque odio orci, fermentum quis nulla rhoncus, pulvinar accumsan purus. Ut lorem turpis, dapibus sit amet dolor et, lacinia feugiat dolor. Cras scelerisque nec massa ut cursus. Vestibulum in elementum leo. Nam magna diam, congue ac sodales euismod, dapibus sed mauris. Suspendisse posuere fermentum lacus, gravida hendrerit leo elementum id. Nullam sit amet sem mollis, rhoncus lacus faucibus, pretium ante.</p>`,
    skills: ["creative", "organised", "teamwork", "patient"],
    schools: [
      {
        name: "epsi",
        url: "https://www.epsi.fr/",
        img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        name: "epsi",
        url: "https://www.epsi.fr/",
        img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        name: "epsi",
        url: "https://www.epsi.fr/",
        img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ],
  };
  // const { title, img, description, skills, schools } = jobData;
  return (
    <>
      <Section>
        {data &&
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
                  {subTitles && (
                    <InfoSection>
                      <InfoTitle>Titres</InfoTitle>
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
                      <InfoTitle>Compétences</InfoTitle>
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
                      <InfoTitle>Résponsabilités</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobDutiesResponsibilities,
                        }}
                      />
                    </InfoSection>
                  )}
                  {jobPurpose && (
                    <InfoSection>
                      <InfoTitle>Objectifs</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobPurpose,
                        }}
                      />
                    </InfoSection>
                  )}
                  {workingConditions && (
                    <InfoSection>
                      <InfoTitle>Conditions de travail</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: workingConditions,
                        }}
                      />
                    </InfoSection>
                  )}
                  {jobSalary && (
                    <InfoSection>
                      <InfoTitle>Rémunération</InfoTitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobSalary,
                        }}
                      />
                    </InfoSection>
                  )}
                  {recruitment && (
                    <InfoSection>
                      <InfoTitle>Recrutement</InfoTitle>
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
          })}
        {/* <SectionItem flex>
          <img
            src={img}
            alt={title}
            style={{ width: "100%", height: "auto", margin: "auto" }}
          />
        </SectionItem>
        <SectionItem>
          <h1 style={{ textAlign: "center" }}>{title}</h1>
          <p>
            Compétences :
            {skills.map((skill, i) =>
              i !== skills.length ? ` ${skill},` : skill
            )}
          </p>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </SectionItem>  */}
      </Section>
      <Section>
        {schools && (
          <SchoolGrid>
            {schools.map((school) => (
              <SchoolCard school={school} />
            ))}
          </SchoolGrid>
        )}
      </Section>
    </>
  );
}
