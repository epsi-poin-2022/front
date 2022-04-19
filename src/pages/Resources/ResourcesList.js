import styled from "@emotion/styled";
import React, { useState } from "react";
import Title from "../../components/elements/Title";
import { DARK } from "../../utils/Constants";
const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const ResourceContainer = styled.div`
  padding-block: 20px;
`;
export default function ResourcesList() {
  const [data, setData] = useState([
    {
      id: 1,
      label:
        "Micode x Pôle emploi - Les passionnés du numérique - Développeur Full Stack",
      link: "https://www.youtube.com/watch?v=RRDSl8OdVrU&list=PLqvVw037WdRWjSlcLW07QEZmJ4NvuCwP6&index=1",
      jobDescription: "/api/job_descriptions/1",
    },
    {
      id: 2,
      label:
        "Micode x Pôle emploi - Les passionnés du numérique - UX/UI Designer",
      link: "https://www.youtube.com/watch?v=pMFqC3AanII&list=PLqvVw037WdRWjSlcLW07QEZmJ4NvuCwP6&index=5",
      jobDescription: "/api/job_descriptions/2",
    },
  ]);

  return (
    <>
      <Title title="Resources" />
      <Container>
        {data.map((resource) => (
          <ResourceContainer>
            <h2>{resource.label}</h2>
            <a
              href={resource.link}
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: DARK }}
            >
              {resource.link}
            </a>
          </ResourceContainer>
        ))}
      </Container>
    </>
  );
}
