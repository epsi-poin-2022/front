import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/buttons/CustomButton";
import { BUTTON_NOT_OK, BUTTON_OK } from "../../utils/ApplicationText";

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

const fadeIn = keyframes`
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }`;

const QuestionTitle = styled.h3`
  width: 50%;
  text-align: center;
  animation: ${fadeIn} 1s ease;
  font-size: 2rem;
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
  questions = [],
  skills = [],
  setSkills = () => {},
  dislikes = [],
  setDislikes = () => {},
}) {
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  useEffect(() => {
    setCurrentQuestion(questions[index].title);
  }, [index]);

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
  const reset = () => {
    setDislikes([]);
    setSkills([]);
    setIndex(0);
  };
  return (
    <QuestionContainer>
      <QuestionNavigation>
        {index > 0 ? <Arrow reverse onClick={() => questionBefore()} /> : <></>}
        {currentQuestion && (
          <QuestionTitle key={currentQuestion}>{currentQuestion}</QuestionTitle>
        )}
        {index === questions.length - 1 ? (
          <></>
        ) : (
          <>
            <Arrow onClick={() => questionAfter()} />
          </>
        )}
      </QuestionNavigation>
      <ButtonContainer>
        <CustomButton title={BUTTON_OK} onClick={() => addSkill()} />
        <CustomButton title={BUTTON_NOT_OK} onClick={() => removeSkill()} />
      </ButtonContainer>
      {(skills.length > 0 || dislikes.length > 0) && (
        <>
          <p>
            Vos choix :{" "}
            {skills.length > 1 ? skills.map((skill) => `${skill}, `) : skills}
            {dislikes.length > 1 ? (
              dislikes.map((skill) => {
                return (
                  <span>
                    <strike>{skill}</strike>,
                  </span>
                );
              })
            ) : (
              <span>
                <strike>{dislikes}</strike>
              </span>
            )}
          </p>
          <CustomButton title="Reset" onClick={() => reset()} />
        </>
      )}
    </QuestionContainer>
  );
}
