import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import CustomInput from "../../components/inputs/CustomInput";
import TextEditor from "../../components/inputs/TextEditor";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
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
  // useEffect(() => {
  //   console.log(description);
  // }, [description]);

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Name" setState={setName} />
      <CustomInput label="Short Descritpion" setState={setShort} />
      <TextEditor setState={setDescription} />
      <CustomInput label="Skills" setState={setSkills} />
      <Row>
        <Input label="Qualifications" setState={setSkills} />
        <Input label="Education" setState={setSkills} />
        <Input label="Experience" setState={setSkills} />
      </Row>
      <Row>
        <Input label="Knowledge" setState={setSkills} />
        <Input label="Working Conditions" setState={setSkills} />
        <Input label="Recruitment" setState={setSkills} />
      </Row>
      <Row>
        <Input label="JobSalary" setState={setSkills} />
        <Input label="Comment" setState={setSkills} />
        <Input label="Picture" setState={setSkills} />
      </Row>
      <CustomInput label="Schools" setState={setSkills} />
      <CustomInput label="Job Titles" setState={setSkills} />
      <CustomInput label="Ressources" setState={setSkills} />
    </div>
  );
}
