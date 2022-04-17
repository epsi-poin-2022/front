import styled from "@emotion/styled/macro";
import React from "react";
import { Link } from "react-router-dom";
import {
  BORDER_RADIUS,
  DARK,
  LIGHT,
  SHADOW,
  TRANSITION,
} from "../../utils/Constants";

const SectionStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 5vw;
`;

const Overlay = styled.div`
  position: absolute;
  padding-bottom: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: ${BORDER_RADIUS};
  background-color: ${LIGHT};
  transform: translateY(100%);
  transition: ${TRANSITION};
`;

const Header = styled.div`
  padding: 2em;
  border-radius: ${BORDER_RADIUS};
  background-color: ${(props) => (props.includes ? DARK : LIGHT)};
  transform: translateY(-100%);
  transition: ${TRANSITION};
`;

const Card = styled(Link)`
  position: relative;
  display: block;
  height: 100%;
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
  text-decoration: none;
  box-shadow: ${SHADOW};
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Negative = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #444;
  z-index: 2;
`;

const JobCard = ({ job, skills, dislikes }) => {
  let includes = true;
  if (skills.length === 1 && dislikes.length === 0)
    includes = job.skills.some((jobSkill) => skills.includes(jobSkill));
  else
    includes =
      !job.skills.some((jobSkill) => dislikes.includes(jobSkill)) &&
      skills.every((jobSkill) => job.skills.includes(jobSkill));
  const shorten = () => {
    if (job.description.length > 150)
      return job.description.substring(0, 150) + "...";
    else return job.description;
  };
  return (
    <Card to="/">
      <Image src={job.img} alt={job.title} />
      <Overlay>
        <Header>
          <Title>{job.title}</Title>
        </Header>
        <Description>{shorten()}</Description>
      </Overlay>
      {skills.length > 0 && !includes && <Negative />}
    </Card>
  );
};

export default function JobsCards({ jobs = [], skills = [], dislikes = [] }) {
  return (
    <SectionStyle>
      {jobs.map((job, i) => (
        <JobCard
          job={job}
          key={`job-uid-${i}`}
          skills={skills}
          dislikes={dislikes}
        />
      ))}
    </SectionStyle>
  );
}
