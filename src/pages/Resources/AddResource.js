import React, { useState, useEffect } from "react";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/inputs/CustomInput";
import RequestAPI from "../../utils/RequestAPI";
import Title from "./../../components/elements/Title";
import CustomSelect from "../../components/inputs/CustomSelect";

export default function AddResource() {
  const [label, setLabel] = useState();
  const [link, setLink] = useState();
  const [selectedJob, setSelectedJob] = useState();
  const [jobs, setJobs] = useState();

  useEffect(() => {
    (async () => {
      const res = await RequestAPI("GET", "job_titles?page=1");
      let temp = [];
      res.data.forEach((job) => {
        temp.push({
          value: job.jobDescription,
          label: job.label,
        });
      });
      setJobs(temp);
    })();
  }, []);

  const submit = () => {
    const data = {
      label: label,
      link: link,
      jobDescription: selectedJob[0],
    };
    console.log(data);
    RequestAPI("POST", "ressources", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div style={{ padding: 20 }}>
      <Title title="Add resource" />
      <CustomInput label="Name" setState={setLabel} />
      <CustomInput label="Path" setState={setLink} />
      <CustomSelect label="Job" dataArr={jobs} setState={setSelectedJob} />
      <div style={{ paddingTop: 20 }}>
        <CustomButton title="Submit" onClick={() => submit()} />
      </div>
    </div>
  );
}
