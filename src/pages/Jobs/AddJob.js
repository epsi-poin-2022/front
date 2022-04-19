import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/inputs/CustomInput";
import CustomSelect from "../../components/inputs/CustomSelect";
import TextEditor from "../../components/inputs/TextEditor";
import RequestAPI from "../../utils/RequestAPI";
import Title from "./../../components/elements/Title";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Select = styled(CustomSelect)`
  width: 30vw;
`;

const Input = styled(CustomInput)`
  width: 30vw;
`;
const Label = styled.label`
  font-size: 1.2rem;
  padding-bottom: 10px;
  font-weight: 600;
`;

export default function AddJob() {
  const [label, setLabel] = useState();
  // const [short, setShort] = useState();
  // const [description, setDescription] = useState();
  // const [qualifications, setQualifications] = useState();
  // const [education, setEducation] = useState();
  // const [experience, setExperience] = useState();
  // const [knowledge, setKnowledge] = useState();
  // const [workingConditions, setWorkingConditions] = useState();
  // const [recruitment, setRecruitment] = useState();
  // const [jobSalary, setJobSalary] = useState();
  // const [comment, setComment] = useState();
  // const [picture, setPicture] = useState();
  // const [schools, setSchools] = useState();
  // const [skills, setSkills] = useState();
  // const [jobTitles, setJobTitles] = useState();
  // const [ressources, setRessources] = useState();

  const [jobPurpose, setJobPurpose] = useState();
  const [jobDutiesResponsibilities, setJobDutiesResponsibilities] = useState();
  const [requiredQualifications, setRequiredQualifications] = useState();
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [knowledge, setKnowledge] = useState();
  const [workingConditions, setWorkingConditions] = useState();
  const [recruitment, setRecruitment] = useState();
  const [jobSalary, setJobSalary] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [comment, setComment] = useState();
  const [picture, setPicture] = useState();
  const [schools, setSchools] = useState();
  const [skills, setSkills] = useState();
  const [jobTitles, setJobTitles] = useState();
  const [ressources, setRessources] = useState();
  const availableSkills = [
    {
      value: "teamwork",
      label: "Travail d'équipe",
    },
    {
      value: "aze",
      label: "AZE",
    },
    {
      value: "bcd",
      label: "bcd",
    },
    {
      value: "def",
      label: "def",
    },
  ];

  const availableJobTitles = [
    {
      value: 1,
      label: "designer ui",
    },
    {
      value: 2,
      label: "designer ux",
    },
  ];

  const availableSchools = [
    {
      value: 1,
      label: "epsi",
    },
    {
      value: 2,
      label: "wis",
    },
  ];

  const submit = () => {
    const data = {
      jobPurpose: jobPurpose,
      // jobDutiesResponsibilities:	string
      // requiredQualifications:	string
      // education:	string
      // experience:	string
      // knowledge	:string
      // workingConditions	:string
      // recruitment	:string
      // jobSalary	:string
      shortDescription: shortDescription,
      // comment	:string
      // picture	:string($iri-reference)
      // externalDocs:
      createdAt: new Date(),
      // nullable: true
      // nullable: true
      // schools	:[...]
      // skills	:[...]
      // jobTitles	:[...]
      // ressources	:[...]
    };
    console.log(data);
    // RequestAPI("POST", "job_descriptions", data)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  };
  return (
    <div style={{ padding: 20 }}>
      <Title title="Add job" />
      <CustomInput label="Label" setState={setLabel} />
      <CustomInput label="Short Descritpion*" setState={setShortDescription} />
      <Label>Job purpose*</Label>
      <TextEditor setState={setJobPurpose} />
      <Row>
        <Select
          label="Skills"
          dataArr={availableSkills}
          setState={setSkills}
          multiple
        />
        <Select
          label="Job titles"
          dataArr={availableJobTitles}
          setState={setJobTitles}
          multiple
        />
        <Select
          label="Schools"
          dataArr={availableSchools}
          setState={setSchools}
          multiple
        />
      </Row>
      <Row>
        <Input
          label="Required Qualifications"
          setState={setRequiredQualifications}
        />
        <Input label="Education" setState={setEducation} />
        <Input label="Experience" setState={setExperience} />
      </Row>
      <Row>
        <Input label="Knowledge" setState={setKnowledge} />
        <Input label="Working Conditions" setState={setWorkingConditions} />
        <Input label="Recruitment" setState={setRecruitment} />
      </Row>
      <Row>
        <Input label="JobSalary" setState={setJobSalary} />
        <Input label="Comment" setState={setComment} />
        <Input label="Picture" setState={setPicture} />
      </Row>
      <CustomInput label="Ressources" setState={setRessources} />
      <CustomButton title="submit" onClick={() => submit()} />
    </div>
  );
}
