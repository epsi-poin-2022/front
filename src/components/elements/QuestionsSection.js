import styled from "@emotion/styled";
import React from "react";
import CustomButton from "../buttons/CustomButton";
import IconButton from "../buttons/IconButton";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const QuestionNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const QuestionTitle = styled.h3`
  width: 50%;
  text-align: center;
`;

const ButtonContainer = styled.div`
  // width: 300px;
  gap: 50px;
  padding-block: 25px;
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.span`
  position: relative;
  display: inline-block;
  padding: 8px 0;
  transform: rotate(${(props) => (props.reverse ? "180deg" : "0")});
  &:before {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: #5a5351;
    top: 50%;
    transition: width 0.5s ease-out;
  }
  &:after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-top: 3px solid #5a5351;
    border-right: 3px solid #5a5351;
    transform: rotate(45deg);
    top: 0;
    position: absolute;
    right: 0px;
  }
  &:hover {
    cursor: pointer;
    &:before {
      width: 80px;
    }
  }
`;
export default function QuestionsSection({
  index = 0,
  setIndex = () => {},
  questions = [],
  skills = [],
  setSkills = () => {},
  dislikes = [],
  setDislikes = () => {},
}) {
  const questionBefore = () => {
    index > 0 && setIndex(index - 1);
  };

  const questionAfter = () => {
    index < questions.length - 1 && setIndex(index + 1);
  };

  const addSkill = () => {
    if (!skills.includes(questions[index].skill)) {
      if (dislikes.includes(questions[index].skill)) {
        const itemToRemove = dislikes.indexOf(questions[index].skill);
        dislikes.splice(itemToRemove, 1);
        setDislikes([...dislikes]);
      }
      setSkills([...skills, questions[index].skill]);
      questionAfter();
      return;
    }
    questionAfter();
  };

  const removeSkill = () => {
    if (!dislikes.includes(questions[index].skill)) {
      if (skills.includes(questions[index].skill)) {
        const itemToRemove = skills.indexOf(questions[index].skill);
        skills.splice(itemToRemove, 1);
        setSkills([...skills]);
      }
      setDislikes([...dislikes, questions[index].skill]);
      questionAfter();
      return;
    }
    questionAfter();
  };
  return (
    <QuestionContainer>
      <QuestionNavigation>
        {index > 0 ? (
          <Arrow reverse onClick={() => questionBefore()} />
        ) : (
          // <IconButton
          //   path="img/back-arrow.svg"
          //   onClick={() => questionBefore()}
          //   alt="Retour"
          // />
          <></>
        )}
        <QuestionTitle>{questions[index].title}</QuestionTitle>
        {index === questions.length - 1 ? (
          <></>
        ) : (
          <>
            <Arrow onClick={() => questionAfter()} />
          </>
          // <IconButton
          //   path="img/next-arrow.svg"
          //   onClick={() => questionAfter()}
          //   alt="Retour"
          // />
        )}
      </QuestionNavigation>
      <ButtonContainer>
        <CustomButton title="Yes" onClick={() => addSkill()} />
        <CustomButton title="No" onClick={() => removeSkill()} />
      </ButtonContainer>
      <p>
        Vos choix :{" "}
        {skills.length > 1 ? skills.map((skill) => `${skill}, `) : skills}
      </p>
    </QuestionContainer>
  );
}
