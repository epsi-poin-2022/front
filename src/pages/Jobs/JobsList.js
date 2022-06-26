import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/buttons/CustomButton";
import Divider from "../../components/elements/Divider";
import Loader from "../../components/elements/Loader";
import { BUTTON_MORE } from "../../utils/ApplicationText";
import {
  BORDER_RADIUS,
  LIGHT,
  PRIMARY,
  TRANSITION,
} from "../../utils/Constants";
import RequestAPI from "../../utils/RequestAPI";
const StyledLink = styled(Link)`
  font-size: 1.5em;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 20px;
  margin-inline: 20px;
  @media (max-width: 1020px) {
    margin-block: 20px;
  }
  // min-width: 200px;
  width: fit-content;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: ${BORDER_RADIUS}px;
  transition: ${TRANSITION};
  color: ${(props) => (props.active ? LIGHT : PRIMARY)};
  background-color: ${(props) => (props.active ? PRIMARY : LIGHT)};
  border: 1px solid ${(props) => (props.active ? LIGHT : PRIMARY)};
  &:hover {
    color: ${LIGHT};
    background-color: ${PRIMARY};
  }
`;

const Container = styled.div`
  width: 95%;
  @media (min-width: 1020px) {
    width: 70%;
  }
  margin: 1vh auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const Row = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 1020px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }
  align-content: "center";
  margin-block: 50px;
  align-items: center;
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 1020px) {
    align-items: center;
  }
  @media (min-width: 1020px) {
    padding-left: ${(props) => (props.reverse ? "25px" : 0)};
    padding-right: ${(props) => (props.reverse ? 0 : "25px")};
  }
`;

const ButtonContainer = styled.div`
  @media (min-width: 1020px) {
    margin-left: auto;
  }
`;
export default function JobsList() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState();
  const [rawJobs, setRawJobs] = useState();
  const [rawTitles, setRawTitles] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await RequestAPI("GET", "job_descriptions?page=1");
        setRawJobs(res.data);
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
    if (rawJobs && rawTitles) {
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
            const jobInfo = {
              title: officialTitle,
              id: description.id,
              description: description.jobPurpose,
              img: res.data.filePath,
            };
            tempJobs.push(jobInfo);
          } catch (e) {
            console.log(e);
          }
        })
      ).then(() => setJobs(tempJobs));
    }
  }, [rawJobs, rawTitles]);
  return (
    <>
      <Container>
        {jobs ? (
          jobs.map((job, i) => (
            <>
              <Row key={`job-uid-${i}`} reverse={i % 2 !== 0 ? true : false}>
                <div>
                  <img
                    src={job.img}
                    style={{ maxWidth: 250, mawHeight: 150 }}
                    alt={job.title}
                  />
                </div>
                <Info reverse={i % 2 === 0 ? true : false}>
                  <StyledLink to={`/jobs/${job.id}`}>{job.title}</StyledLink>
                  <p style={{ paddingBlock: 20 }}>{job.description}</p>
                  <ButtonContainer>
                    <CustomButton
                      title={BUTTON_MORE}
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    />
                  </ButtonContainer>
                </Info>
              </Row>
              <Divider />
            </>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
}
