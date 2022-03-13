import styled from "@emotion/styled/macro";
import React from "react";
import { Link } from "react-router-dom";
import { DARK, LIGHT } from "../../utils/Constants";

const SectionStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
`;

const Overlay = styled.div`
  position: absolute;
  padding-bottom: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: 50px;
  background-color: ${LIGHT};
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
`;

const Header = styled.div`
  padding: 2em;
  border-radius: 50px 0 0 0;
  background-color: ${(props) => (props.includes ? DARK : LIGHT)};
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`;

const Card = styled(Link)`
  position: relative;
  display: block;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
  text-decoration: none;
  &:hover ${Header} {
    transform: translateY(0);
  }
  &:hover ${Overlay} {
    transform: translateY(0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  font-size: 1em;
  margin: 0 0 0.3em;
  color: ${DARK};
`;

const Description = styled.p`
  padding: 0 2em 2.5em;
  margin: 0;
  color: ${DARK};
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const JobCard = ({ job, skills }) => {
  const includes = job.skills.some((skill) => skills.includes(skill));
  const shorten = () => {
    if (job.description.length > 150)
      return job.description.substring(0, 150) + "...";
    else return job.description;
  };
  return (
    <Card to="/">
      <Image src={job.img} alt={job.title} />
      <Overlay>
        <Header includes={includes}>
          <Title>{job.title}</Title>
        </Header>
        <Description>{shorten()}</Description>
      </Overlay>
    </Card>
  );
};

export default function JobsSection({ jobs = [], skills = [] }) {
  return (
    <SectionStyle>
      {jobs.map((job, i) => (
        <JobCard job={job} key={`job-uid-${i}`} skills={skills} />
      ))}
    </SectionStyle>
  );
}
