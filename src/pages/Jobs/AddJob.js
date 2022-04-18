import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import CustomInput from "../../components/inputs/CustomInput";
import CustomSelect from "../../components/inputs/CustomSelect";
import TextEditor from "../../components/inputs/TextEditor";

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
export default function AddJob() {
  const [name, setName] = useState();
  const [short, setShort] = useState();
  const [description, setDescription] = useState();
  const [skills, setSkills] = useState();
  const [qualifications, setQualifications] = useState();
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [knowledge, setKnowledge] = useState();
  const [workingConditions, setWorkingConditions] = useState();
  const [recruitment, setRecruitment] = useState();
  const [jobSalary, setJobSalary] = useState();
  const [comment, setComment] = useState();
  const [picture, setPicture] = useState();
  const [schools, setSchools] = useState();
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
  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Name" setState={setName} />
      <CustomInput label="Short Descritpion" setState={setShort} />
      <TextEditor setState={setDescription} />
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
        <Input label="Qualifications" setState={setQualifications} />
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
    </div>
  );
}
