import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import Loader from "../../components/elements/Loader";
import {
  BORDER_RADIUS,
  LIGHT,
  PRIMARY,
  TRANSITION,
} from "../../utils/Constants";
import RequestAPI from "../../utils/RequestAPI";

const Link = styled.a`
  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  min-width: 150px;
`;

const ResourceItem = styled.h3`
  position: relative;
  display: inline-block;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  transition: ${TRANSITION};
  color: ${PRIMARY};
  border: 1px solid ${PRIMARY};
  border-radius: ${BORDER_RADIUS}px;
  &:hover {
    color: ${LIGHT};
    background-color: ${PRIMARY};
  }
`;
const Container = styled.div`
  width: 70%;
  margin: auto;
`;

const ResourceContainer = styled.div`
  padding-block: 20px;
`;

export default function ResourcesList() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await RequestAPI("GET", "ressources");
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <Container>
        {data ? (
          data.map((resource) => (
            <ResourceContainer>
              <Link href={resource.link} rel="noreferrer" target="_blank">
                <ResourceItem>{resource.label}</ResourceItem>
              </Link>
            </ResourceContainer>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
}
