import styled from "@emotion/styled";
import React from "react";
import CustomButton from "../buttons/CustomButton";
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

const ButtonContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
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
          <IconButton
            path="img/back-arrow.svg"
            onClick={() => questionBefore()}
            alt="Retour"
          />
        ) : (
          <></>
        )}
        <QuestionTitle>{questions[index].title}</QuestionTitle>
        {index === questions.length - 1 ? (
          <></>
        ) : (
          <IconButton
            path="img/next-arrow.svg"
            onClick={() => questionAfter()}
            alt="Retour"
          />
        )}
      </QuestionNavigation>
      <ButtonContainer>
        <CustomButton title="Yes" onClick={() => addSkill()} />
        <CustomButton title="No" onClick={() => removeSkill()} />
      </ButtonContainer>
    </QuestionContainer>
  );
}
