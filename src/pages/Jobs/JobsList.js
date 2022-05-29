import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/buttons/CustomButton";
import Loader from "../../components/elements/Loader";
import { BUTTON_MORE } from "../../utils/ApplicationText";
import RequestAPI from "../../utils/RequestAPI";
const Container = styled.div`
  width: 70%;
  margin: 1vh auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const Row = styled.div`
  min-height: 20vh;
  display: flex;
  align-content: "center";
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  margin-block: 25px;
  align-items: center;
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: ${(props) => (props.reverse ? "25px" : 0)};
  padding-right: ${(props) => (props.reverse ? 0 : "25px")};
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
            tempJobs.push(jobInfo);
            tempJobs.push(jobInfo);
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
            <Row key={`job-uid-${i}`} reverse={i % 2 !== 0 ? true : false}>
              <div>
                <img
                  src={job.img}
                  style={{ width: 250, height: 150 }}
                  alt={job.title}
                />
              </div>
              <Info reverse={i % 2 === 0 ? true : false}>
                <h2>{job.title}</h2>
                <p style={{ paddingBlock: 20 }}>{job.description}</p>
                <div>
                  <CustomButton
                    title={BUTTON_MORE}
                    onClick={() => navigate(`/jobs/${job.id}`)}
                  />
                </div>
              </Info>
            </Row>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
}
