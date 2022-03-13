import styled from "@emotion/styled";
import React from "react";
import IconButton from "../buttons/IconButton";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const QuestionNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const QuestionTitle = styled.h2`
  width: 50%;
  text-align: center;
`;

export default function QuestionsSection({
  index = 0,
  setIndex = () => {},
  questions = [],
  skills = [],
  setSkills = () => {},
}) {
  const questionBefore = () => {
    index > 0 && setIndex(index - 1);
  };

  const questionAfter = () => {
    index < questions.length - 1 && setIndex(index + 1);
  };

  const addSkill = () => {
    if (!skills.includes(questions[index].skill)) {
      setSkills([...skills, questions[index].skill]);
      questionAfter();
      return;
    }
    questionAfter();
  };

  const removeSkill = () => {
    if (skills.includes(questions[index].skill)) {
      const itemToRemove = skills.indexOf(questions[index].skill);
      skills.splice(itemToRemove, 1);
      setSkills([...skills]);
      questionAfter();
      return;
    }
    questionAfter();
  };
  return (
    <QuestionContainer>
      <QuestionNavigation>
        <IconButton
          path="img/back-arrow.svg"
          onClick={() => questionBefore()}
          alt="Retour"
        />
        <QuestionTitle>{questions[index].title}</QuestionTitle>
        <IconButton
          path="img/next-arrow.svg"
          onClick={() => questionAfter()}
          alt="Retour"
        />
      </QuestionNavigation>
      <div>
        <span onClick={() => addSkill()}>yes</span>
        <span onClick={() => removeSkill()}>no</span>
      </div>
    </QuestionContainer>
  );
}
