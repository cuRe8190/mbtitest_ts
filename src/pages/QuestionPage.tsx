import React from "react";
import { questionData } from "../stores/Question/questionData";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Header from "../components/Header";

export default function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = React.useState(0);
  const handleClickAnswer = () => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper key={questionData[questionNo].id}>
        <Title>
          #{questionData[questionNo].id} {questionData[questionNo].title}
        </Title>
        <ButtonGroup>
          <Button
            variant="outline-secondary"
            style={{ marginRight: 20 }}
            onClick={handleClickAnswer}
          >
            {questionData[questionNo].answerA}
          </Button>
          <Button variant="outline-secondary" onClick={handleClickAnswer}>
            {questionData[questionNo].answerB}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // height: 100vh;
  height: 100%;
  background: #c8dfff;
  font-family: "Chosun";
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 20px;
`;

const Title = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1rem;
`;
